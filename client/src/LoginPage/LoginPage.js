import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo.png';
import UsernameInput from './components/Usernameinput';
import SubmitButton from './components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { registerNewUser }  from '../utils/wssConnection/wssConnection';
import { setUsername } from '../Actions/dashboardActions';

import './LoginPage.css';

const LoginPage = ({ saveUsername }) => {
  const [username, setUsername] = useState('');

  const history = useNavigate();

  const handleSubmitButtonPressed = () => {
    registerNewUser(username);
    saveUsername(username);
    history('/video-chat');
  };

  return (
    <div className='login-page_container background_main_color'>
      <div className='login-page_login_box background_secondary_color'>
        <div className='login-page_logo_container'>
          <img className='login-page_logo_image' src={logo} alt='VideoTalker' />
        </div>
        <div className='login-page_title_container'>
          <h2>VIDEO CHAT</h2>
        </div>
        <UsernameInput username={username} setUsername={setUsername} />
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
