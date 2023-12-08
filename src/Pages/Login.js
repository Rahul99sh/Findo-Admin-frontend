import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from "firebase/firestore";
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { database } from '../firebase';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  // MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();
  const checkLoginStatus = async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(database, "Admin", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  };
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      checkLoginStatus();
      if (isAdmin) {
        navigate('/dashboard');
      } else {
        console.log('You are not an authorized user.');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid w-75" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6' className="d-flex align-items-center justify-content-center">
          <div className="text-center w-75">
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" className="w-100" value={email} onChange={handleEmailChange} />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" className="w-100" value={password} onChange={handlePasswordChange} />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            </div>

            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleLogin}>
              Sign in
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
