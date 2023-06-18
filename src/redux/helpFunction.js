import { isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
const arrThunks = [fetchContacts, addContact, deleteContact];
export const onPending = state => {
  state.isLoading = true;
};

export const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const onFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
};

export const onFulfilledFetch = (state, { payload }) => {
  state.contacts = payload;
};

export const onFulfilledAdd = (state, { payload }) => {
  state.contacts.push(payload);
};

export const onFulfilledDelete = (state, action) => {
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
};

export const createStatus = type => isAnyOf(...arrThunks.map(el => el[type]));
