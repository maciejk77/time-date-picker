# Time/Date Picker app

## Instructions

- `git clone` the app to your local
- Run `npm i` to install dependencies
- Run `npm run start` to start app
- Visit `localhost:3000` to review

## DONE

- The user must be able to select a date up to four weeks in advance
- The user can select a single time slot between 6am and 9:45pm in 15 minute intervals
- Display a summary of the selected date & time in the footer
- Any time slot in the past must be greyed out and not selectable
- The “Next” button is disabled if a date and time is not selected

## TO BE COMPLETED

- The time picker should scroll to the current time on the current day on screen load

## NOTES

- Add functionality to highlight current day
- Add a functionality to show all time slots available on days beyond today
- Helper to be refactored to leverage Moment.js to clean up code, too much data manipulation atm
- Fix with refactor to Moment.js the currently fixed value for day of the week e.g. "Mon"
- Add chevrons for Day Picker scroller
- Add proper styling as per screenshot
