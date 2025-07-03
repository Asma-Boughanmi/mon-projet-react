import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
}

export default TaskInput;
