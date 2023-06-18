import { Button, Li, P, Ul } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Tooltip } from '@mui/material';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContactsById = (id, contactName) => {
    dispatch(deleteContact(id));
    toast.success(
      `The contact "${contactName}" has been successfully deleted.`
    );
  };

  const filterContacts = () => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(contact => contact.name.includes(filter));
    }
  };

  return (
    <>
      {contacts.length <= 0 ? (
        <P>No contacts were found for this request</P>
      ) : filterContacts().length <= 0 ? (
        <P>No contacts found for this search "{filter}"</P>
      ) : (
        <Ul>
          {filterContacts().map(({ id, name, number }) => {
            return (
              <Li key={id}>
                {name} : {number}
                <Tooltip title="Delete contacts">
                  <Button
                    type="button"
                    onClick={() => {
                      deleteContactsById(id, name);
                    }}
                  >
                    <PersonRemoveIcon></PersonRemoveIcon>
                  </Button>
                </Tooltip>
              </Li>
            );
          })}
        </Ul>
      )}
    </>
  );
};
