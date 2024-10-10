# UNO ACM Website

This is the official website for the University of New Orleans chapter of the Association for Computing Machinery (UNO ACM). The website provides information about the chapter, its executives, events, and more.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Running the Development Server](#running-the-development-server)
  - [Building the Project](#building-the-project)
  - [Linting](#linting)
- [Project Structure](#project-structure)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (version 6 or later)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/uno-acm/uno-acm-website.git
    cd uno-acm-website
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Development

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

This will start the Next.js development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building the Project

To build the project for production, run:

```sh
npm run build
```

This will create an optimized production build in the `.next` directory.

### Linting

To lint the project, run:

```sh
npm run lint
```

This will run ESLint on the project files.

## Project Structure

- `.eslintrc.json`: ESLint configuration file.
- `.gitignore`: Git ignore file.
- `.next/`: Next.js build output directory.
- `app/`: Contains the main application components and pages.
  - `fonts/`: Custom fonts used in the project.
  - `globals.css`: Global CSS styles.
  - `layout.tsx`: Layout component for the application.
  - `page.tsx`: Main page component.
- `public/`: Public assets accessible directly via URL.
  - `assets/`: Static assets such as images.
- `components/`: Reusable UI components.
  - `ui/`: UI-specific components.
- `components.json`: Component configuration file.
- `lib/`: Utility functions and libraries.
  - `utils.ts`: Utility functions.
- `next-env.d.ts`: Next.js environment types.
- `next.config.mjs`: Next.js configuration file.
- `package.json`: Project metadata and dependencies.
- `postcss.config.mjs`: PostCSS configuration file.
- `README.md`: Project documentation.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `tsconfig.json`: TypeScript configuration file.