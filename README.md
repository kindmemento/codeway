# visionary - Parameters Management Panel

### Overview
This is the frontend project for a Parameters Management Panel (namely, visionary), built with Vue.js. The panel allows users to manage application parameters through a user-friendly interface.

### Features
- Responsive Design: Separate layouts for mobile and web clients.
- Parameter Management: Add, edit, and delete parameters.
- Authentication: Firebase-based authentication for secure access.

### Prerequisites
- Node.js: Ensure you have Node.js installed. Recommended version: v20.16.0
- npm: Node package manager. Recommended version: v10.8.1

### Environment Variables
Create a .env file in the root of your project with the following variables:

	VITE_FIREBASE_API_KEY=
	VITE_FIREBASE_AUTH_DOMAIN=
	VITE_FIREBASE_PROJECT_ID=
	VITE_FIREBASE_STORAGE_BUCKET=
	VITE_FIREBASE_MESSAGING_SENDER_ID=
	VITE_FIREBASE_FIREBASE_APP_ID=
	VITE_FIREBASE_MEASUREMENT_ID=
	VITE_NEURALBASE_BASE_URL=
	VITE_API_TOKEN=IikZW3r6JKUYuCz4Q0dnokLlzBjYzo9lK_QsHr33FYI

	- Backend project runs on port 3000 by default. If you want to run the project locally, enter `http://localhost:3000/api` for the field `VITE_NEURALBASE_BASE_URL`

### Installation
1. Clone the repository:
git clone ...

2. Install dependencies
npm install

3. Run the development server
npm run serve

NOTE: To run the project locally, you need to run the backend project (neuralbase) in your local environment

4. Build for production
npm run build


### Deployment
1. Set up environment variables: Ensure your .env file is correctly set up with your Firebase credentials.
2. Build the project
npm run build
3. Deploy to a static hosting service:
	- You can deploy the `dist` folder to any static hosting service like Netlify, Vercel, or Firebase Hosting.

### Usage
	- Login: Users must authenticate using their email and password.
	- Manage Parameters: Users can view, add, edit, and delete parameters.
