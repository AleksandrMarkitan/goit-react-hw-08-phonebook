import { useSelector } from 'react-redux';
import {
  selectUserEmail,
  selectUserName,
  selectUserAvatar,
} from 'redux/auth/authSelectors';

import s from './UserAuthMenu.module.scss';

export const UserAuthMenu = () => {
  const email = useSelector(selectUserEmail);
  const name = useSelector(selectUserName);
  const avatarURL = useSelector(selectUserAvatar);
  console.log(avatarURL);
  return (
    <>
      {email && (
        <div className={s.userAuthMenu}>
          <p>{`Hello! ${name}`}</p>
          <img src={avatarURL} alt="avatar" width={25} height={25} />
          <p>{`you email: ${email}`}</p>
        </div>
      )}
    </>
  );
};
