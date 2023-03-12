import { CHANGE_FILTER } from '../constans';
import { load } from "redux-localstorage-simple";

let data = load({ namespace: 'todo-list' });

if (!data || !data.filters) {
    data = { filters: 'all' };
}
const filters = (state = data.filters, { type, payload }) => {
    switch (type) {
        case CHANGE_FILTER:
            return payload;
        default:
            return state;
    }
}

export default filters;
