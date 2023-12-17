import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { API_URL } from '@/config';
import { AppDispatch, RootState } from '@/store';

export const getUrl = (path = '') => {
  if (path.length === 0) {
    throw new Error("The path can't be empty!");
  }

  return `${API_URL}${path}`;
};

export const mockStore = configureMockStore<RootState, AppDispatch>([thunk]);
