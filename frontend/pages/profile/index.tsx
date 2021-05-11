import { ReactElement, useContext } from 'react';

import { AuthContext } from '@/components/AuthProvider';

const Profile = (): ReactElement => {
  const { user } = useContext(AuthContext);

  const { nickName } = user ?? { nickName: null };

  return (
    <div>
      Welcome back, &nbsp;
      {nickName}
    </div>
  );
};

export default Profile;
