import PropTypes from 'prop-types';

import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineUserAdd,
} from 'react-icons/hi';
import s from './Button.module.scss';

export const AuthButton = ({ text, clickHeandler }) => {
  return (
    <button className={s.buttonAdd} onClick={clickHeandler}>
      {text}
    </button>
  );
};

export const SaveButton = () => {
  return <button className={s.buttonAdd}>Save</button>;
};

export const AddButton = ({ openModal, type }) => {
  const handleDelBtn = () => {
    openModal('add'); //вызов модалки add contact из которой вызываем contactEdit
  };
  return (
    <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
      <HiOutlineUserAdd className={s.buttonDelSvg} size={32} />
    </button>
  );
};

export const EditButton = ({ openModal, type }) => {
  const handleDelBtn = () => {
    openModal('edit'); //вызов модалки add contact из которой вызываем contactEdit
  };
  return (
    <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
      <HiOutlinePencil className={s.buttonDelSvg} size={16} />
    </button>
  );
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

DeleteButton.propTypes = {
  type: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
