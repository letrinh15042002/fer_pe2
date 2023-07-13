import { ITEMS } from '../shared/items';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    items: ITEMS,
    comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
    return state;
};
