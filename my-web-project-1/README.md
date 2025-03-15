# My Web Project

This project is a web application built with Node.js, TypeScript, React, Bootstrap for styling, and SQLite3 for the database. It provides functionalities for user authentication and managing a WireGuard server.

## Project Structure

```
my-web-project
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── authController.ts
│   │   │   └── wireguardController.ts
│   │   ├── models
│   │   │   ├── userModel.ts
│   │   │   └── wireguardModel.ts
│   │   ├── routes
│   │   │   ├── authRoutes.ts
│   │   │   └── wireguardRoutes.ts
│   │   ├── services
│   │   │   ├── authService.ts
│   │   │   └── wireguardService.ts
│   │   ├── app.ts
│   │   ├── database.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Login.tsx
│   │   │   ├── SyncConfig.tsx
│   │   │   └── ManageClients.tsx
│   │   ├── pages
│   │   │   ├── LoginPage.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── WireguardPage.tsx
│   │   │   └── ManageClientsPage.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── styles
│   │       └── App.css
│   ├── public
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── .gitignore
└── README.md
```

## Features

1. **User Authentication**: Users can log in to access the dashboard. Credentials are validated against an SQLite3 database.
2. **WireGuard Server Management**: Users can set up a remote WireGuard server, sync configurations, and restart the server.
3. **Client Management**: Users can manage WireGuard clients, including adding new clients and generating configuration files.

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

Visit `http://localhost:3000` to access the application.

## License

This project is licensed under the MIT License.