import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({request}) =>  {

  // get the params.
  const url = new URL(request.url).searchParams;
  const mode = url.get('mode') || 'login';
  
  // if it's any other param return
  if(mode !== 'signup' && mode !== 'login') {
    throw json({message: 'Unsupported mode'}, {status: 422});
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if(response.status === 422 || response.status === 401) {
    return response
  };

  if(!response.ok) {
    throw json({message: 'couldn\'t authenticate'}, {status: 500});
  }

  // get the token and store it.

  const responseData = await response.json();
  const token = responseData.token;

  localStorage.setItem('token', token);
  // everything went fine.
  return redirect('/');
}