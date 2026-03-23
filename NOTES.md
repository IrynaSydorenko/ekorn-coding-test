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

## What I Would Improve

- Extract a `.container` component for layout max-width/centering — scales better when full-width sections like headers or banners need to break out of the max-width constraint
- Extract reusable UI components — `Button`, `Input`, and `Select` are used as inline elements in the page but in a production codebase these would be extracted into shared components.
