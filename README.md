# 🚀 QuickAI

<div align="center">

![QuickAI Logo](https://raw.githubusercontent.com/Harivsrd/QuickAI/main/public/logo.png) <!-- TODO: Add project logo image -->

[![GitHub stars](https://img.shields.io/github/stars/Harivsrd/QuickAI?style=for-the-badge)](https://github.com/Harivsrd/QuickAI/stargazers)

[![GitHub forks](https://img.shields.io/github/forks/Harivsrd/QuickAI?style=for-the-badge)](https://github.com/Harivsrd/QuickAI/network)

[![GitHub issues](https://img.shields.io/github/issues/Harivsrd/QuickAI?style=for-the-badge)](https://github.com/Harivsrd/QuickAI/issues)

[![GitHub license](https://img.shields.io/github/license/Harivsrd/QuickAI?style=for-the-badge)](LICENSE) <!-- TODO: Add LICENSE file -->

**An intuitive full-stack web application leveraging AI for rapid content generation and user interaction.**

[Live Demo](https://quick-ai-server-seven-rho.vercel.app)

</div>

## 📖 Overview

QuickAI is a comprehensive full-stack web application designed to provide users with powerful AI-driven capabilities for generating various forms of content. With a clear separation of concerns between its React frontend and Node.js/Express.js backend, QuickAI offers a responsive and secure platform for interacting with cutting-edge AI models, managing user data, and storing generated content. It aims to streamline content creation and provide an engaging user experience for AI enthusiasts and professionals alike.

## ✨ Features

-   🎯 **AI-Powered Content Generation**: Seamless integration with external AI APIs (e.g., OpenAI) for generating text, images, or other creative content.
-   🔐 **User Authentication**: Secure user registration, login, and session management using JSON Web Tokens (JWT).
-   📱 **Responsive User Interface**: A modern and intuitive frontend built with React, ensuring a smooth experience across devices.
-   ⚡ **Robust RESTful API**: A high-performance Node.js/Express.js backend handling AI requests and managing data with MongoDB.
-   📊 **Content History & Dashboard**: Users can view, retrieve, and manage their past AI-generated content.
-   👤 **User Profile Management**: Functionality for users to update their account details and preferences.

## 🖥️ Screenshots

![Screenshot 1](C:\Users\Asus\OneDrive\Pictures\Screenshots\Screenshot 2026-01-10 171709.png) <!-- TODO: Add actual desktop screenshots -->

![Screenshot 2](path-to-screenshot-mobile.png) <!-- TODO: Add actual mobile screenshots -->

## 🛠️ Tech Stack

**Frontend:**

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**Backend:**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

![Mongoose](https://img.shields.io/badge/Mongoose-800000?style=for-the-badge&logo=mongoose&logoColor=white)

![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

**DevOps:**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 🚀 Quick Start

Follow these steps to get QuickAI up and running on your local machine.

### Prerequisites
-   **Node.js**: (LTS recommended, e.g., v18.x or v20.x)
-   **npm**: (usually comes with Node.js)
-   **MongoDB**: A running instance (local or cloud-hosted).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Harivsrd/QuickAI.git
    cd QuickAI
    ```

2.  **Backend Setup**
    Navigate to the `server` directory and install dependencies:
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory based on `.env.example`:
    ```bash
    cp .env.example .env
    ```
    Open `.env` and configure your environment variables:
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/quickai_db  # Your MongoDB connection string
    JWT_SECRET=your_secret_key_for_jwt             # Use a strong, random secret
    OPENAI_API_KEY=your_openai_api_key             # Get this from OpenAI dashboard
    # Add any other AI service API keys here
    ```

3.  **Frontend Setup**
    Navigate to the `client` directory and install dependencies:
    ```bash
    cd ../client
    npm install
    ```
    Create a `.env` file in the `client` directory based on `.env.example`:
    ```bash
    cp .env.example .env
    ```
    Open `.env` and configure your environment variables:
    ```
    VITE_SERVER_URL=http://localhost:5000/api  # Ensure this matches your backend's port and API prefix
    ```

### Running the Application

1.  **Start the Backend Server**
    From the `server` directory:
    ```bash
    npm start
    ```
    The backend server will start at `http://localhost:5000`.

2.  **Start the Frontend Development Server**
    From the `client` directory:
    ```bash
    npm run dev
    ```
    The frontend application will typically start at `http://localhost:3000` (or another available port).

3.  **Open your browser**
    Visit `http://localhost:3000` to access the QuickAI application.

## 📁 Project Structure

```
QuickAI/
├── .gitignore
├── README.md
├── client/                                 # Frontend (React with Vite)
│   ├── public/                             # Static assets
│   │   └── index.html                      # Main HTML file
│   ├── src/                                # Frontend source code
│   │   ├── assets/                         # Images, icons, fonts
│   │   ├── components/                     # Reusable UI components
│   │   │   ├── Button/
│   │   │   └── ...
│   │   ├── hooks/                          # Custom React hooks
│   │   ├── pages/                          # Main application views
│   │   │   ├── Home.jsx
│   │   │   ├── Auth.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx                         # Main application component
│   │   └── main.jsx                        # Entry point for React app
│   ├── package.json                        # Frontend dependencies & scripts
│   ├── vite.config.js                      # Vite build configuration
│   └── .env.example                        # Frontend environment variables
└── server/                                 # Backend (Node.js with Express.js)
    ├── config/                             # Database and other configurations
    │   └── db.js                           # MongoDB connection setup
    ├── controllers/                        # Business logic for API routes
    │   ├── authController.js
    │   └── aiController.js
    ├── models/                             # Mongoose schemas for MongoDB collections
    │   ├── User.js
    │   └── GeneratedContent.js
    ├── routes/                             # API endpoint definitions
    │   ├── authRoutes.js
    │   └── aiRoutes.js
    ├── utils/                              # Utility functions (e.g., JWT, error handling)
    │   └── jwt.js
    ├── .env.example                        # Backend environment variables
    ├── package.json                        # Backend dependencies & scripts
    └── server.js                           # Main Express server entry point
```

## ⚙️ Configuration

### Environment Variables
The application relies on environment variables for sensitive information and configuration.
Make sure to create `.env` files in both the `client` and `server` directories based on their respective `.env.example` files.

| Variable          | Directory | Description                                     | Default           | Required |

|-------------------|-----------|-------------------------------------------------|-------------------|----------|

| `PORT`            | `server`  | Port for the backend server to listen on.       | `5000`            | Yes      |

| `MONGO_URI`       | `server`  | MongoDB connection string.                      | `N/A`             | Yes      |

| `JWT_SECRET`      | `server`  | Secret key for signing and verifying JWTs.      | `N/A`             | Yes      |

| `OPENAI_API_KEY`  | `server`  | API key for OpenAI (or other AI service).       | `N/A`             | Yes      |

| `VITE_SERVER_URL` | `client`  | Base URL for the backend API.                   | `http://localhost:5000/api` | Yes      |

### Configuration Files
-   `server/config/db.js`: Contains MongoDB connection logic.
-   `client/vite.config.js`: Frontend build and development server configuration.

## 🔧 Development

### Available Scripts

**In the `client` directory:**

| Command         | Description                                     |

|-----------------|-------------------------------------------------|

| `npm run dev`   | Starts the frontend development server.         |

| `npm run build` | Builds the frontend for production.             |

| `npm run lint`  | Lints the frontend source code.                 |

| `npm run preview` | Serves the production build locally.          |

**In the `server` directory:**

| Command         | Description                                     |

|-----------------|-------------------------------------------------|

| `npm start`     | Starts the backend server in production mode.   |

| `npm run dev`   | Starts the backend server with `nodemon` for auto-restarts. |

### Development Workflow
For active development, run `npm run dev` in both the `client` and `server` directories simultaneously from separate terminal windows. Changes in either directory will trigger hot reloads or server restarts as configured.

## 🧪 Testing

This project includes basic testing setup.

**In the `client` directory:**
```bash

# Run client-side tests (e.g., Vitest or Jest)
npm test
```

**In the `server` directory:**
```bash

# Run server-side tests (e.g., Jest or Mocha)
npm test
```

## 🚀 Deployment

### Production Build
To create a production-ready build of the frontend:
```bash
cd client
npm run build
```
The optimized static files will be generated in the `dist` directory.

### Deployment Options
-   **Frontend (Vercel)**: The `client` application can be easily deployed to [Vercel](https://vercel.com/) by connecting your GitHub repository. Vercel automatically detects Vite/React projects and builds them. Ensure your `VITE_SERVER_URL` environment variable points to your deployed backend.
-   **Backend (Render/Heroku/AWS/etc.)**: The `server` application can be deployed to any cloud provider that supports Node.js applications (e.g., Render, Heroku, AWS EC2, DigitalOcean). Configure your environment variables on the hosting platform.

## 📚 API Reference

The backend provides a RESTful API for authentication and AI-powered operations. All API endpoints are prefixed with `/api`.

### Authentication
-   `POST /api/auth/register`: Register a new user.
-   `POST /api/auth/login`: Log in an existing user and receive a JWT.
-   `GET /api/auth/me`: Get current user details (requires JWT in `Authorization` header).

### AI Generation Endpoints
-   `POST /api/ai/generate-text`: Request AI text generation (requires authentication).
    -   **Body**: `{ "prompt": "Your text prompt", "options": {} }`
    -   **Response**: `{ "text": "Generated AI text" }`
-   `POST /api/ai/generate-image`: Request AI image generation (requires authentication).
    -   **Body**: `{ "prompt": "Your image prompt", "size": "256x256" }`
    -   **Response**: `{ "imageUrl": "URL to generated image" }`

### Content Management
-   `GET /api/content`: Retrieve all generated content for the authenticated user.
-   `GET /api/content/:id`: Retrieve a specific generated content item.
-   `DELETE /api/content/:id`: Delete a specific generated content item.

## 🤝 Contributing

We welcome contributions to QuickAI! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started, report bugs, and suggest features. <!-- TODO: Add a CONTRIBUTING.md file -->

### Development Setup for Contributors
The development setup is as described in the [Quick Start](#🚀-quick-start) section. Ensure you have Node.js and MongoDB installed, then set up the environment variables for both client and server.


## 🙏 Acknowledgments

-   **OpenAI**: For providing powerful AI models that enable the core functionality of QuickAI.
-   **React Community**: For the vibrant ecosystem and continuous innovation.
-   **Express.js Community**: For the robust and flexible backend framework.

## 📞 Support & Contact

-   🐛 Issues: [GitHub Issues](https://github.com/Harivsrd/QuickAI/issues)
-   📧 Contact the project owner: [harivsrd@example.com] <!-- TODO: Add actual contact email for Harivsrd -->

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Harivsrd](https://github.com/Harivsrd)

</div>

