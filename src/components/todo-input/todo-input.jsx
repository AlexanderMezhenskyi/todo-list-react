import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyDown }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" />
        <input
            className="todo-input"
            placeholder="Click to add task"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
        />
    </div>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    value: PropTypes.string,
}

ToDoInput.defaultProps = {
    onChange: () => {},
    onKeyDown: () => {},
    value: '',
}

export default ToDoInput;
