import { createAction, props } from '@ngrx/store';
//actions are dispatched whenever a state is needed
export const updateSearch = createAction(
    '[Header component] update search value',
    props<{ searchContent: string }>()
);
export const loadSearchContent = createAction(
    '[homepage component] get search input data'
)