# **Frontend Engineer Coding Challenge**

## **Overview**

In this challenge, you'll fetch student data from a local API, transform it into a new data model, and present it in a user interface that follows the provided UI design. The goal is to test your ability to work with TypeScript, asynchronous data fetching, data transformation, and frontend UI development.

## **Recommended IDE Setup**

[VS Code](https://code.visualstudio.com/) + [Install Svelte plugin](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## **Project Setup**

This project is built using **SvelteKit** with **Svelte 5**. Svelte shares conceptual similarities with React but differs in its syntax and approach.

**`src/routes/+page.svelte`** is the top level page component that renders on the page.

The **`src/lib`** directory is used to store reusable components, utilities, or helper functions that can be shared across the application.

A local API endpoint is available at **`GET /api/students`** which returns the raw student data.

## **Running Instructions**

To run this app, ensure you have **[Node.js](https://nodejs.org/)** installed on your system. Then, follow these steps:

1. Navigate to the project directory:

   ```bash
   cd /Users/.../ekorn-coding-test
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the [http://localhost:5173](http://localhost:5173).

You're now ready to start working on the app!

## **The Task**

Fetch student data from the local API, transform it into the required data model, and display it in a card-based UI matching the provided design.

**Design reference:** The Figma prototype link has been provided in your email.

### **Constraints**

- You may use any frontend framework of your choice, or stay with SvelteKit.
- You may not use any utility packages (e.g. lodash, date-fns, ramda). Standard browser and runtime APIs only.
- All styling must be written in plain CSS — no CSS frameworks or preprocessors.

## **Part 1: Data Transformation**

The local API endpoint **`GET /api/students`** returns an array of student objects. You can inspect the shape of each object in **`src/lib/data.ts`**.

In **`src/routes/+page.svelte`** there is a `students` array and an `onMount` stub where you should fetch and transform the data.

Remove the `<Hello>` element (it's there to give an example of a Svelte component and how props work).

Fetch from **`GET /api/students`**, transform each object into the **`Student`** type, and assign the result to **`students`**. The type of the `students` array must not be changed.

### **Transformation Rules**

| Student field | Source | Rule |
|---|---|---|
| `id` | `id` | Convert to string |
| `name` | `firstName` + `lastName` | Concatenate with a space |
| `age` | `birthdate` | Calculate age in whole years from today's date |
| `averageScore` | `scores.math`, `scores.english`, `scores.science` | Average of the three scores, rounded to the nearest whole number |
| `activeLabel` | `isActive` | `true` → `'Yes'`, `false` → `'No'` |
| `passedLabel` | `averageScore` | `>= 60` → `'Yes'`, `< 60` → `'No'` |

## **Part 2: UI Implementation**

Build a card-based layout to display the student data, matching the provided design as closely as possible.

- On wider screens, cards should display in up to **3 columns** with a max-width of **1024px**.
- On mobile, cards should display in a **single column**.

### **Styling Rules**

- All styling must use plain CSS.
- Each card displays: **Name**, **Age**, **Average Score**, **Active**, **Passed**, and **ID**.
- `activeLabel` and `passedLabel` values of `'No'` must be displayed in red.
- `activeLabel` and `passedLabel` values of `'Yes'` must be displayed in the default text colour.

## **Bonus Features (Optional)**

These are not required, but demonstrate polish and attention to detail:

- **Loading state** — show a loading indicator while the API request is in flight.
- **Error state** — handle a failed fetch gracefully with a user-facing message.
- **Sort** — add a control to sort cards by name or average score.
- **Filter** — add a toggle to show only active students.
- **Search** — add a text input to filter cards by student name.

## **Submission Instructions**

- Push your solution to a **public GitHub repository**.
- Include a **NOTES.md** explaining:
  - Your thought process
  - Any assumptions made
  - Any additional features implemented
