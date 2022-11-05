import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export const AppBar = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <Navigation />
      {!token && <AuthNavigation />}
      {token && <UserAuthMenu />}
    </>
  );
};
