import { createSelector } from 'reselect'


// This file consists of selectors which makes use of createSelector function 
// from reselect which provides memoization(caching)

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)