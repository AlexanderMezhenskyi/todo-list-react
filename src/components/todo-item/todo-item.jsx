import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, id, isCompleted, removeTask, completeTask }) => (
    <li className="todo-item">
        <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} onClick={() => completeTask(id)} />
        <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
        <i className="fas fa-times" onClick={() => removeTask(id)} />
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    id: PropTypes.number,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func,
}

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    id: '',
    removeTask: () => {},
    completeTask: () => {},
}

export default ToDoItem;
