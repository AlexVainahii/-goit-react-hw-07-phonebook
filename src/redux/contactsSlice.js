import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import {
  createStatus,
  onFulfilledAdd,
  onFulfilledDelete,
  onFulfilledFetch,
  onFulfilled,
  onPending,
  onRejected,
} from './helpFunction';
const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const STATUSES = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUSES;
    builder
      .addCase(fetchContacts.fulfilled, onFulfilledFetch)
      .addCase(addContact.fulfilled, onFulfilledAdd)
      .addCase(deleteContact.fulfilled, onFulfilledDelete)
      .addMatcher(createStatus(PENDING), onPending)
      .addMatcher(createStatus(REJECTED), onRejected)
      .addMatcher(createStatus(FULFILLED), onFulfilled);
  },
});
