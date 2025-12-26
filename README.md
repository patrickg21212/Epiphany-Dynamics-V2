# Epiphany Dynamics

Epiphany Dynamics is an industry-leading AI solutions provider. This repository contains the source code for the Epiphany Dynamics website, built with React, Vite, and Tailwind CSS.

## Project Structure

The project is organized as follows:

- `components/`: Reusable UI components (e.g., Navbar, Footer, Hero).
- `pages/`: Application pages corresponding to different routes (e.g., Home, Privacy, Terms).
- `App.tsx`: The main application component that sets up routing.
- `index.tsx`: The entry point for the React application.
- `vite.config.ts`: Configuration for Vite.
- `tailwind.config.js`: (Implicit via CDN or setup) Tailwind CSS configuration.

## How to Run Locally

**Prerequisites:** Node.js (v14 or higher recommended)

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:3000` (or another port if 3000 is in use).

## Formatting

This project uses **Prettier** for code formatting to ensure a consistent code style.

To format all files in the project, run:

```bash
npm run format
```

This will automatically format your code according to the rules defined in `.prettierrc`.

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Previewing the Build

To preview the production build locally:

```bash
npm run preview
```
