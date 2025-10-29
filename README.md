# Gemini Clone - Frontend

This project is a web-based clone of the Gemini conversational AI interface, built with React and Vite. It provides a user-friendly interface for interacting with a generative AI model.

## Features

*   **User Authentication:** Secure login and registration functionality.
*   **Conversational Interface:** A responsive chat interface for sending prompts and receiving responses.
*   **Markdown Rendering:** Responses are rendered as Markdown, allowing for rich text formatting.
*   **Protected Routes:** Core application routes are protected, requiring users to be logged in.
*   **Settings Page:** A dedicated page for user settings.
*   **Help Section:** An integrated help section to guide users.
*   **Responsive Design:** The application is designed to work on both desktop and mobile devices.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **React Router:** For handling client-side routing.
*   **Axios:** For making HTTP requests to the backend API.
*   **React Markdown:** To render Markdown formatted responses from the AI.
*   **@google/generative-ai:** The official Google AI SDK for interacting with the Gemini model.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or a compatible package manager) installed on your system.

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd Gemini_clone
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port specified in your Vite config) to view it in the browser. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Lints the project files using ESLint to find and fix problems in your JavaScript code.

### `npm run preview`

Serves the production build locally to preview the application.

## Project Structure

The frontend source code is located in the `src` directory and is organized as follows:

```
src/
├── assets/         # Static assets like images and icons
├── components/     # Reusable React components
│   ├── Auth/       # Login and Register components
│   ├── Help/       # Help section components
│   ├── LandingPage/ # The initial landing page
│   ├── Main/       # The main chat interface
│   ├── Settings/   # The settings page component
│   └── Sidebar/    # The application sidebar
├── context/        # React context for state management (e.g., AuthContext)
├── App.jsx         # The main application component with routing
├── main.jsx        # The entry point of the application
└── index.css       # Global CSS styles
```
