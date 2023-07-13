import * as ActionTypes from './ActionTypes';

export const addComment = (itemid, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        itemid: itemid,
        rating: rating,
        author: author,
        comment: comment
    }
});
