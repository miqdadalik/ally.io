# My Web Project - Backend

This is the backend for the My Web Project, which is built using Node.js, TypeScript, Express, and SQLite3. The backend handles user authentication and manages the WireGuard server operations.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the logic for handling requests.
    - `authController.ts`: Handles user authentication.
    - `wireguardController.ts`: Manages WireGuard server operations.
  - **models/**: Defines the data models for the application.
    - `userModel.ts`: User model for authentication.
    - `wireguardModel.ts`: Model for WireGuard server configurations.
  - **routes/**: Defines the API routes for the application.
    - `authRoutes.ts`: Routes for authentication.
    - `wireguardRoutes.ts`: Routes for WireGuard operations.
  - **services/**: Contains business logic for the application.
    - `authService.ts`: Logic for user authentication.
    - `wireguardService.ts`: Logic for managing WireGuard operations.
  - `app.ts`: Initializes the Express application and sets up middleware.
  - `database.ts`: Handles SQLite3 database connection and schema setup.
  - `server.ts`: Starts the Express server.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-web-project/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the SQLite3 database:
   - Ensure you have SQLite3 installed.
   - Run the necessary migrations or setup scripts as defined in `database.ts`.

## Running the Application

To start the backend server, run:
```
npm start
```

The server will listen for incoming requests on the specified port (default is 3000).

## API Endpoints

- **Authentication**
  - `POST /api/auth/login`: Authenticate user and return a session token.

- **WireGuard Operations**
  - `POST /api/wireguard/sync-config`: Sync configuration from remote server.
  - `PUT /api/wireguard/restart`: Restart the WireGuard server.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.