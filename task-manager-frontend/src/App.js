import React from 'react';
import TaskList from './TaskList';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TaskList />}>
        </Route>
      </Routes>
    </Router>
    // <div className="App">
    //   <TaskList />
    // </div>
  );
}

export default App;