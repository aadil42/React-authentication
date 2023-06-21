import { useEffect } from 'react';
import { Outlet, useNavigation, useLoaderData, useSubmit } from 'react-router-dom';
import {getTokenDuration} from '../utils/Auth';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if(!token) return;

    if(token === 'EXPIRE') return;

    const time = getTokenDuration();
    
    setTimeout(() => {
        submit(null, {action: '/logut', method: 'post'});
        return;
    }, time);

  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
