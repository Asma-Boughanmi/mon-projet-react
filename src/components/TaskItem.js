import React from 'react';

function TaskItem({ task, index, deleteTask, toggleComplete }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleComplete(index)}>
        {task.completed ? 'Annuler' : 'Terminer'}
      </button>
      <button onClick={() => deleteTask(index)}>Supprimer</button>
    </li>
  );
}

export default TaskItem;
