import PropTypes from 'prop-types';

import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import s from './Button.module.scss';

export const AuthButton = ({ text, clickHeandler }) => {
  return (
    <button className={s.buttonAdd} onClick={clickHeandler}>
      {text}
    </button>
  );
};

export const AddButton = () => {
  return <button className={s.buttonAdd}>Add contact</button>;
};
export const DeleteButton = ({ type, contactId, contactDelete }) => {
  const handleDelBtn = () => {
    contactDelete(contactId);
  };
  return (
    <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
      <HiOutlineTrash className={s.buttonDelSvg} size={16} />
    </button>
  );
};

export const EditButton = ({ type, contactId, contactDelete }) => {
  const handleDelBtn = () => {
    contactDelete(contactId); //вызов модалки add contact из которой вызываем contactEdit
  };
  return (
    <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
      <HiOutlinePencil className={s.buttonDelSvg} size={16} />
    </button>
  );
};

DeleteButton.propTypes = {
  type: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};