import { createStore, combineReducers } from 'redux';
import { Items } from './items';
import { Comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            items: Items,
            comments: Comments,
        })
    );

    return store;
}
