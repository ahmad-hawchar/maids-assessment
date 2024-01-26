import { createReducer, on } from '@ngrx/store';
import { loadSearchContent, updateSearch } from './user.actions';
export interface SearchState {
    searchText: string;
}
export const initialState: SearchState = {
    searchText: 'test'
}
//changes the old searchText value from the store to the new value provided by the action
export const searchReducer = createReducer(
    initialState,
    on(updateSearch, (state, { searchContent }) => ({ searchText: searchContent })),
    on(loadSearchContent, (state) => ({ ...state }))
)
