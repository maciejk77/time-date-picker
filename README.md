# Time/Date Picker app

## DONE

- The user must be able to select a date up to four weeks in advance
- The user can select a single time slot between 6am and 9:45pm in 15 minute intervals
- Display a summary of the selected date & time in the footer
- Any time slot in the past must be greyed out and not selectable
- The “Next” button is disabled if a date and time is not selected

## TO BE COMPLETED

- The time picker should scroll to the current time on the current day on screen load

## NOTES

- Helper to be refactored to leverage Moment.js to clean up code, to much data manipulation atm
- Introduce `react-jss` or `styled-components` theme to remove boilerplate, handle logic better
- Add chevrons for Day Picker scroller
- Add proper styling as per screenshot
