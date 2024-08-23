import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskList.css'

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
    setTasks(response.data);
  };

  const addTask = async () => {
    if (!newTask.trim()) {
      setShowPopup(true);
      return;
    }
    await axios.post('http://127.0.0.1:8000/api/tasks/', { title: newTask });
    setNewTask('');
    fetchTasks();
  };

  const deleteTask = async (taskId) => {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`);
    fetchTasks();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='task-list-container'>
      <header>Task Manager</header>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {showPopup && (
        <div className='popup'>
          <p>Please enter a task!</p>
          <button onClick={closePopup}>OK</button>
        </div>
      )}
    </div>
  );
}

export default TaskList;
