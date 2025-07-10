# Sample App Backend

This is a simple Express.js backend application written in TypeScript. It provides a basic API with two endpoints: `/` and `/time`.

## Features

- Express.js server
- TypeScript support
- CORS enabled
- Environment variable configuration with dotenv

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd sample-app-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   - Create a `.env` file in the root directory.
   - Add the following line to specify the port:
     ```env
     PORT=3000
     ```

4. **Run the application in development mode**

   ```bash
   npm run dev
   ```

   The server will start at `http://localhost:3000` (or the port you specified).

5. **Build the application**

   ```bash
   npm run build
   ```

   It will generate `dist` directory with the compiled JavaScript files. The server can be run in production mode using:

   ```bash
   npm start
   ```

## API Endpoints

- `GET /` — Returns `Hello, World!`
- `GET /time` — Returns the current server time

## Project Structure

```
src/
  main.ts         # Main entry point of the application
package.json      # Project metadata and scripts
tsconfig.json     # TypeScript configuration
```

## License

MIT
