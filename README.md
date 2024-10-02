BackendStruct is a Node.js CLI tool designed to generate a backend folder structure, especially suited for projects that implement Role-Based Access Control (RBAC). It provides an organized structure that supports authentication and access control systems out-of-the-box.

Features:-
	Role-Based Access Control (RBAC) ready structure.
	Creates a basic backend folder structure for your project.
	Automatically sets up the structure without any prompts.
	Easy to configure with environment variables like JWT_SECRET, MONGODB_URI, and PORT.

Installation
To install the package, run:

		npm install backendstruct

Usage
Once installed, you can create your backend project structure by running the following command:

		npx create-struct

Steps:
Run the npx create-struct command in your terminal.
The tool will automatically create the backend folder structure in the current directory.
After the structure is created, you will need to set up the necessary environment variables.

Folder Structure
The tool will generate a folder structure like this:

				your-current-directory/
				├── config/
				│   └── db.js
				├── controllers/
				│   └── exampleController.js
				├── models/
				│   └── exampleModel.js
				├── routes/
				│   └── exampleRoutes.js
				├── middlewares/
				│   └── roleMiddleware.js
				├── app.js
				├── package.json
This structure includes common directories such as config, controllers, models, routes, and middlewares to handle role-based access control.

Environment Variables
You need to add the following environment variables to the .env file in the root of your project:

JWT_SECRET: Secret key used to sign and verify JSON Web Tokens (JWT).
MONGODB_URI: MongoDB connection string to connect to your database.
PORT: The port number on which your server will run.

Example .env File:
	JWT_SECRET=your_jwt_secret_key
 
	MONGODB_URI=your_mongodb_uri
 
	PORT=5000

Example
	$ npx create-struct
 
	Creating project at: /path/to/current-directory
 
	Backend folder structure created successfully!
 
	After running the command, the backend folder structure will be set up in the current directory, ready for customization.

Role-Based Access Control (RBAC)
The folder structure supports RBAC by including a middlewares/roleMiddleware.js file where you can implement your role-checking logic. This middleware will allow you to protect routes based on user roles.

Troubleshooting
If you encounter permission errors when trying to install the package globally, you can resolve it by using the following command with sudo:

	sudo npm install -g backendstruct


License

This project is licensed under the ISC License.
