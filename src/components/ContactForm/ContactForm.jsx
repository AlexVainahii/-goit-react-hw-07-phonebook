import { Button, Form, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const formSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    if (
      contacts.find(
        option => option.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      toast.warning(`${name.value} is already in contacts list`);
      return false;
    } else {
      dispatch(addContact({ name: name.value, number: number.value }));
      name.value = '';
      number.value = '';
      return true;
    }
  };

  return (
    <>
      <Form onSubmit={formSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
