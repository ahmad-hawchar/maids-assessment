import { createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { createFeatureSelector } from '@ngrx/store';
export const selectAppState = createFeatureSelector<AppState>('app');
export const selectSearch = createSelector(
    selectAppState,
    (state: AppState) => state.search
);
