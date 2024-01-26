import { createSelector } from '@ngrx/store';
import { AppState } from './app-state';
import { SearchState } from './user.reducers';

export const selectSearchState = (state: AppState) => state.searchContentState;
export const selectSearchText = createSelector(
    selectSearchState,
    (state: SearchState) => state?.searchText
);