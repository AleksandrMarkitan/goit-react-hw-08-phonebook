import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { AuthButton } from '../Button/Button';
import { selectUserName, selectUserEmail } from 'redux/auth/authSelectors';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);

  const clickHeandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <p>{`Welcome ${name}!`}</p>
      <p>{email}</p>
      <AuthButton text={'LogOut'} clickHeandler={clickHeandler} />
    </>
  );
};
