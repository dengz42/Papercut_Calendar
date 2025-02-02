// googleSchedule.js

const API_KEY_CALENDAR = "AIzaSyBkE-rQQJ-uWpda7Ax3tulbcT18rz3FWqI"; 
const API_URL_CALENDAR = "https://www.googleapis.com/calendar/v3/calendars/primary/events?key=" + API_KEY_CALENDAR;

async function createEvent(eventDetails) {
    const event = {
        summary: eventDetails.summary,
        start: {
            dateTime: eventDetails.startTime,
            timeZone: "Canada/Toronto", // Adjust to your timezone
        },
        end: {
            dateTime: eventDetails.endTime,
            timeZone: "Canada/Toronto",
        },
    };

    const response = await fetch(API_URL_CALENDAR, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    });

    const data = await response.json();
    return data;
}

function parseSchedule(response) {
    const events = [];
    const responseLines = response.split("\n");
    for (i = 0; i < responseLines.length; i += 1) {
        if (responseLines[i].includes(":")) {
            const eventDetails = responseLines[i].split(":")[0].trim();
            const timeRange = responseLines[i].split(":")[1].trim();
            const [startTime, endTime] = timeRange.split(" - ");
            events.push({
                summary: eventDetails,
                startTime: startTime,
                endTime: endTime,
            });
        }
    }
    //Example push
    events.push({
        summary: "GDSC Hackathon",
        startTime: "2025-02-02T10:00:00",
        endTime: "2025-02-02T17:00:00",
    })
    return events;
}
