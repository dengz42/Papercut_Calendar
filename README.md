# Papercut Calendar

Papercut Calendar is a web application that integrates AI-generated schedules into Google Calendar. By providing a prompt, users can generate a schedule tailored to their needs and have it directly added to their Google Calendar.
The inspiration for this project comes from how we ask AI for suggestions in our daily lives. Papercut Calendar ensures that users can instantly incorporate AI-generated advice into their schedules.

## Features

- Users provide a prompt for an AI-generated schedule (e.g., "Generate a one-hour daily workout schedule").
- The response from Google's Gemini AI is parsed and structured into calendar events.
- Events are pushed into the user's Google Calendar.
- Users are redirected to Google Calendar to review their newly created schedule.

## Technologies Used

- **Frontend:** JavaScript, HTML, CSS
- **APIs:**
  - [Google Calendar API](https://developers.google.com/calendar)
  - [Google Generative Language API (Gemini)](https://ai.google.dev/)

## Challenges

One of the biggest challenges was parsing and reformatting the AI-generated responses into structured events that could be added to Google Calendar. Handling variations in AI responses and ensuring data consistency remains a key improvement area.

## Accomplishments

- Successfully built a working integration between AI-generated schedules and Google Calendar.
- Overcame technical challenges related to API interactions.

## Lessons Learned
- Gained a deeper understanding of how APIs interact and how to incorporate them into a web application.
- Improved handling of structured data conversion from AI responses to calendar events.

## Future Improvements
- Enhance the calendar event generator to better structure AI responses into properly formatted events.
- Add customization options for scheduling preferences.

### Author
[Zhongyi Deng](https://github.com/dengz42)
