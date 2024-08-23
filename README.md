# Task Manager

## Description

Task Manager is a web application designed to help users organize and manage their tasks efficiently. The frontend is built using React, offering a simple and intuitive interface for task management. The backend is powered by Django REST framework, providing a robust API for task operations.

## Features

- Add, view, and manage tasks
- Responsive and user-friendly interface
- Task list with persistence
- Pop-up notifications for user actions
- Animated elements for improved user experience
- RESTful API for task operations

## Installation Instructions

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- Python (v3.8 or later)
- Django (v3.x or later)

### Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file in the root of the frontend directory and add your backend URL:**
   ```
   REACT_APP_BACKEND_URL=http://localhost:8000
   ```

5. **Start the frontend server:**
   ```bash
   npm start
   ```

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd ../backend
   ```

2. **Create a virtual environment:**
   ```bash
   python3 -m venv env
   source env/bin/activate  # For Windows: env\Scripts\activate
   ```

3. **Install the required Python packages:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Start the backend server:**
   ```bash
   python manage.py runserver
   ```

## Usage

To use the Task Manager application, follow the installation instructions to set up both the frontend and the backend. Once both servers are running:

- **Visit** `http://localhost:3000` to access the frontend interface.
- **Manage tasks** by adding new tasks, viewing the list of tasks, and deleting tasks from the interface.

## Examples

### Add a Task

1. **Enter the task title** in the input box.
2. **Click the "Add Task" button** to add the task to the list.

### View Tasks

1. **Open the application** to view the list of tasks.
2. **The tasks are displayed** in a list format.

### Pop-up Notification

1. **Attempt to add an empty task.**
2. A **pop-up notification** will appear prompting to enter a task.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **React** for the powerful frontend library
- **Django** for the robust backend framework
- **Axios** for handling HTTP requests
- **Styled Components** for the modular CSS styling
- **React Router Dom** for routing management
- **React Testing Library** for testing utilities

## Contributing

Contributions are welcome! Please read our [CONTRIBUTING](CONTRIBUTING.md) guidelines for more information.

## Support

If you have any questions or issues, please open an issue on GitHub.
