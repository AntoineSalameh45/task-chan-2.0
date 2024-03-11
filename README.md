# Task-chan 2.0

This project is a Task Manager application built with Next.js and React. It allows users to manage their tasks, including adding new tasks, deleting existing tasks, updating task statuses, and setting due dates. The application also includes server-side rendering for improved performance and SEO.

## Technologies Used

- **Next.js**: Next.js is a React framework that enables server-side rendering, automatic code splitting, and easy deployment.
- **React**: React is a JavaScript library for building user interfaces.
- **Redux Toolkit**: Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.
- **Redux Persist**: Redux Persist is a library to persist and rehydrate a Redux store.
- **Axios**: Axios is a promise-based HTTP client for making HTTP requests.
- **Redux Toolkit Query**: Redux Toolkit Query is a data fetching and caching library built on Redux Toolkit.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.
- **Material-UI**: Material-UI is a React UI framework for building responsive web applications with customizable components.

## Project Overview

The project structure includes components for task management, such as adding tasks, deleting tasks, and updating task statuses. It also includes pages for displaying active and completed tasks, with server-side rendering to improve performance and SEO.

The application fetches data from an external API and displays it on a dedicated details page. The API endpoint URL is stored in a `.env.local` file for security reasons.

## Implementation Details

- **Redux Store Setup**: The Redux store is configured using Redux Toolkit, with reducers for managing tasks and their statuses.
- **Server-Side Rendering**: Next.js is used for server-side rendering to improve initial page load performance and search engine optimization.
- **Data Fetching**: Data is fetched from an external API using Axios and displayed on the details page.
- **Component Structure**: Components are organized into molecules, organisms, and pages for better code structure and reusability.
- **Styling**: Tailwind CSS and Material-UI are used for styling the application components, providing a responsive and visually appealing user interface.

## Issues Faced

- **Fetching Data**: Initially, there were challenges in fetching data from the API and integrating it into the application due to CORS and authentication issues.
- **Server-Side Rendering with Redux**: Integrating Redux with server-side rendering posed challenges, especially with data fetching and hydration.
- **Styling Integration**: Combining Tailwind CSS and Material-UI required careful integration to ensure a consistent and cohesive design across the application.

## Installation Steps

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd task-manager-app`
3. Install dependencies: `npm install`
4. Create a `.env.local` file in the project root and add the API endpoint URL
5. Start the development server: `npm run dev`
6. Access the application in your browser at `http://localhost:3000`

## Conclusion

Task-chan 2.0 is a robust solution for managing tasks with server-side rendering for improved performance and SEO. Despite initial challenges, the project demonstrates effective use of Next.js, React, Redux, Axios, Tailwind CSS, and Material-UI to create a seamless user experience.

