import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';

import s from './UserAuthMenu.module.scss';

export const UserAuthMenu = () => {
  const email = useSelector(selectUserEmail);

  return (
    <>
      {email && (
        <div className={s.userAuthMenu}>
          <p>{`Hello!`}</p>
          <p>{email}</p>
        </div>
      )}
    </>
  );
};
