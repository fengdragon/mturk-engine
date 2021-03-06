import { RootState } from '../types';

export const hitDatabaseSelector = (state: RootState) => state.hitDatabase;

export const hitBlocklistSelector = (state: RootState) => state.hitBlocklist;

export const hitBlocklistFilterSettingsSelector = (state: RootState) =>
  state.hitBlocklistFilterSettings;

export const loggedSearchResultsSelector = (state: RootState) =>
  state.notifiedSearchResultIds;

export const loggedRequestersSelector = (state: RootState) =>
  state.loggedRequesters;

export const requesterBlocklistSelector = (state: RootState) =>
  state.requesterBlocklist;

export const notificationSettingsSelector = (state: RootState) =>
  state.notificationSettings;

export const queueSelector = (state: RootState) => state.queue;

export const searchResultsSelector = (state: RootState) => state.search;

export const markedAsReadGroupIdsSelector = (state: RootState) =>
  state.markedAsReadGroupIds;

export const selectedHitDbDateSelector = (state: RootState) =>
  state.selectedHitDbDate;

export const sortOptionSelector = (state: RootState) => state.sortingOption;

export const uploadedStateSelector = (state: RootState) => state.uploadedState;

/**
 * WARNING: Never call this selector in a connected component directly. Legacy
 * watchers may not have all the properties of new watchers. Always call the
 * normalizedWatchers selector instead.
 */
export const watchersSelector = (state: RootState) => state.watchers;

export const watcherTreeSelector = (state: RootState) =>
  state.watcherTreeSettings;

export const watcherTimersSelector = (state: RootState) => state.watcherTimers;

export const watcherFoldersSelector = (state: RootState) =>
  state.watcherFolders;

export const turkopticonSettingsSelector = (state: RootState) =>
  state.topticonSettings;

export const databaseFilterSettingsSelector = (state: RootState) =>
  state.databaseFilterSettings;
