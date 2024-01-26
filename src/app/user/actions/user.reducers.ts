import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { updateSearch } from './user.actions';

export const initialState = '';

const _searchReducer = createReducer(
    initialState,
    on(updateSearch, (state, { search }) => search)
);

export function searchReducer(state: any, action: Action) {
    return _searchReducer(state, action);
}