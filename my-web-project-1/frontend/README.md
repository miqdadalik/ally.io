# My Web Project

This project is a web application built with Node.js, TypeScript, React, Bootstrap, and SQLite3. It provides a user interface for managing a WireGuard server, including authentication, configuration synchronization, and client management.

## Project Structure

```
my-web-project
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── app.ts
│   │   ├── database.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── styles
│   ├── public
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── .gitignore
└── README.md
```

## Features

- **User Authentication**: Users can log in to access the dashboard. Credentials are validated against an SQLite3 database.
- **WireGuard Server Management**: Users can set up a remote WireGuard server, sync configurations, and restart the server.
- **Client Management**: Users can add and manage WireGuard clients, including generating keys and displaying QR codes.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- SQLite3

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-web-project
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.