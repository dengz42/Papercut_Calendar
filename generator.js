// app.js
async function generateAndCreateSchedule() {
    // Get user input from the textarea
    const userInput = document.getElementById("userInput").value;
    if (!userInput) {
        alert("Please enter a prompt.");
        return;
    }

    // Display loading message
    document.getElementById("response").innerText = "Generating your schedule...";

    try {
        // Step 1: Get Gemini response based on the user's prompt
        const geminiResponse = await getGeminiResponse(userPrompt);

        // Step 2: Parse the response to extract events
        const events = parseSchedule(geminiResponse);

        // Step 3: Create events in Google Calendar
        for (const event of events) {
            await createEvent(event);
        }

        // Step 4: Show success message and redirect to Google Calendar
        document.getElementById("response").innerText = "Schedule created successfully! Redirecting...";

        // After a brief delay, redirect to Google Calendar
        setTimeout(() => {
            window.location.href = "https://calendar.google.com"; // Redirect to Google Calendar
        }, 2000); // Delay of 2 seconds

    } catch (error) {
        // Handle any errors that occur
        document.getElementById("response").innerText = "An error occurred. Please try again.";
        console.error(error);
    }
}
