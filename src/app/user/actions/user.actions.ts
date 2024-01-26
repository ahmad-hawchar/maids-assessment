import { createAction, props } from '@ngrx/store';

export const updateSearch = createAction(
    'Header update search',
    props<{ search: string }>()
);
