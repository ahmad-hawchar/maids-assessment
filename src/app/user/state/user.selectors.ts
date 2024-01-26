import { createSelector } from '@ngrx/store';
import { AppState } from './app-state';
import { SearchState } from './user.reducers';
//selects the search content state from the AppState, because there is only one state in this app 
//this part could be removed and the AppState would have the value of the search input direclty
export const selectSearchState = (state: AppState) => state.searchContentState;
//returns the state whenever it is changed
export const selectSearchText = createSelector(
    selectSearchState,
    (state: SearchState) => state?.searchText
);