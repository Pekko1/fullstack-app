
# Fullstack App

This repository contains a fullstack prototype of a login/signup app built using modern web development technologies. It showcases the integration of both frontend and backend components, providing a seamless user experience with a robust backend infrastructure.

## Features

- **Frontend**: Built using [React.js](https://reactjs.org/), providing a dynamic and responsive user interface.
- **Backend**: Powered by [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/), ensuring a fast and scalable server-side.
- **Database**: Integrated with [MongoDB](https://www.mongodb.com/) for efficient data storage and retrieval.
- **Authentication**: Includes user authentication using [JWT](https://jwt.io/).
- **API**: RESTful API endpoints to handle CRUD operations.

## Getting Started

### Prerequisites

- Node.js v14 or higher
- MongoDB instance running locally or a MongoDB Atlas account

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Pekko1/fullstack-app.git
    cd fullstack-app
    ```

2. Install dependencies for both the frontend and backend:

    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add the following variables:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

2. Modify other environment variables if needed.

### Frontend Development

To start the React development server:

```bash
cd frontend-syde
npm run dev
```

### Backend Development

To run the backend server with hot-reload:

```bash
cd backend-syde
npm run dev
```

## Credits
This app was created by Pekko-GB.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
