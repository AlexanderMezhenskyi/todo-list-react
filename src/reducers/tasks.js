import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constans';
import { load } from 'redux-localstorage-simple';

let data = load({ namespace: 'todo-list' });

if (!data || !data.tasks || !data.tasks.length) {
    data = { tasks: [] };
}

const tasks = (state = data.tasks, { type, payload }) => {
    console.log('payload', payload)
    switch (type) {
        case ADD_TASK:
            return [...state, payload];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== payload);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === payload) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        default:
            return state;
    }
}

export default tasks;
