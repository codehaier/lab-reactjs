import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
  onRemoveClick: null,
};

function TodoList({ todoList, onTodoClick, onRemoveClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  const handleRemoveClick = (todo) => {
    if (!onRemoveClick) return;

    onRemoveClick(todo);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
        >
          <p className="todo-name" onClick={() => handleTodoClick(todo, idx)}>
            {todo.title}
          </p>
          <button onClick={() => handleRemoveClick(todo)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
