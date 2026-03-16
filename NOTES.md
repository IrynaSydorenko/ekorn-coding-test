# Notes

## Thought Process

- Fetched data client-side using `onMount` as indicated by the provided stub
- Transformed raw API response into the `Student` type per the specification rules
- Separated UI into components: `StudentCard`, `Error`, `Spinner`

## Assumptions

- All students are displayed (no pagination) since the bonus filter/search features serve as the primary way to reduce visual noise
- Sort order for average score is descending (highest first) as this felt most intuitive

## Additional Features Implemented

- Loading state — spinner while fetch is in flight
- Error state — user-facing error message on failed fetch
- Filter — toggle to show active students only
- Sort — dropdown to sort by name or average score
- Search — text input to filter by student name

## What I Would Do Differently in Production or Improve

- Extract a `.container` component for layout max-width/centering — scales better when full-width sections like headers or banners need to break out of the max-width constraint
- Add proper HTTP error handling (check `response.ok` before parsing JSON)
- Add debounce to the search input to avoid filtering on every keystroke
- Empty state — show a user-facing message when search or filter returns no results, rather than rendering an empty grid
- Add test coverage — unit tests for the data transformation logic (especially `calculateAge` and the `averageScore` calculation) and component tests for conditional rendering (e.g. `danger` class applied correctly for `No` values)
