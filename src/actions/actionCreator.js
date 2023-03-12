import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER } from '../constans';

export const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    payload: { id, text, isCompleted },
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    payload: id,
});

export const completeTask = id => ({
    type: COMPLETE_TASK,
    payload: id,
});

export const changeFilter = activeFilter => ({
    type: CHANGE_FILTER,
    payload: activeFilter,
});

