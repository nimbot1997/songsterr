# Project Structure

This document describes the project structure of the Songsterr Clone.

```
songsterr-clone/
├── README.md               # Project overview and setup instructions
├── docs/                   # Documentation files
│   └── project_structure.md  # This file
├── client/                 # React frontend
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   ├── App.js          # Main application component
│   │   └── index.js        # Entry point
│   ├── package.json        # Frontend dependencies
│   └── webpack.config.js   # Webpack configuration
├── server/                 # Node.js/Express backend
│   ├── models/             # Data models
│   ├── routes/             # API routes
│   ├── app.js            # Main application file
│   └── package.json        # Backend dependencies
├── .gitignore              # Specifies intentionally untracked files that Git should ignore
└── ...
```

## Client (Frontend)

The `client` directory contains the React frontend of the application. It is responsible for rendering the user interface and interacting with the backend API.

## Server (Backend)

The `server` directory contains the Node.js/Express backend of the application. It is responsible for handling API requests, managing data, and authenticating users.
