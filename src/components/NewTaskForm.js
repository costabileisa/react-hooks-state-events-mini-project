import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [form, setForm] = useState({
    text: "",
    category: "Code"
});

  function handleSubmit(event) {
    event.preventDefault();
    const formText = form.text;
    const formCategory = form.category;
    onTaskFormSubmit({ 
      text: formText, 
      category: formCategory });
      setForm({
        text: "",
        category: "Code"
      })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={form.text}
          onChange={event => setForm({ ...form, text: event.target.value })}
        />
      </label>
      <label>
        Category
        <select value={form.category} onChange={event => setForm({ ...form, category: event.target.value })}>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;