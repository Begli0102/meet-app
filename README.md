# Project Objective:
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. This application uses the Google Calendar API to fetch upcoming events.

# Features & Requirements:

## Key Features and User stories
### Feature 1: FILTER EVENTS BY CITY
 As a user,I want to filter events by city. So that I can be aware of what is happening in my location.

### Scenarios
 - Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
 - Scenario 2: User should see a list of suggestions when they search for a city.
 - Scenario 3: User can select a city from the suggested list.

### Feature 2: SHOW/HIDE AN EVENT'S DETAILS
 As a user,I want to show and hide an event details. So that I can be able to know the information according to my wants.

### Scenarios
 - Scenario 1: An event element is collapsed by default.
 - Scenario 2: User can expand an event to see its details.
 - Scenario 3: User can collapse an event to hide its details.

### Feature 3: SPECIFY NUMBER OF EVENTS

 As a user,I want to specify the number of events which I want to view in my app. So that I can be able to see the events in my event list page.

### Scenarios
 - Scenario 1: When user hasn’t specified a number, 32 is the default number.
 - Scenario 2: User can change the number of events they want to see.

### Feature 4: USE THE APP WHEN OFFLINE

As a user,I want to use the app when it is offline as well. So that I can be able to see events when I was online

### Scenarios
 - Scenario 1: Show cached data when there’s no internet connection.
 - Scenario 2: Show error when user changes the settings (city, time range).


### Feature 5: DATA VISUALIZATION

As a user,I want to add the shortcut to my homescreen. So that I can be able to open the app faster than ever.

### Scenarios
 - Scenario 1: Show a chart with the number of upcoming events in each city.


# Technical requirements:The app must be a React application.

- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app must pass Lighthouse’s PWA checklist
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on mobile
- The app must be deployed on GitHub Pages
- The application may be hosted online
- The API call must use React axios and async/await.
- The app must implement an alert system using an OOP approach to show information to the user.
- The app must make use of data visualization (recharts preferred).
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online monitoring tool.

## How to Run

To run this project locally, run the following command, then navigate to the localhost port stated in your terminal.

`npm start`
