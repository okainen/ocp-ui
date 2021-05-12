import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {SIGN_IN} from '@/config/routes';
import Card from '@/components/card';
import Button from '@/components/button';
import TextField from '@/components/textField';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from './SignUp.scss';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [clicked, setClicked] = useState(false);

  const [usernameConflict, setUsernameConflict] = useState(false);
  const [emailConflict, setEmailConflict] = useState(false);

  const history = useHistory();
  // const onClick = () => {
  //   setClicked(true);
  //   setUsernameConflict(false);
  //   setEmailConflict(false);
  //     AuthApi.signUp({ username, email, password })
  //       .then(res => {
  //         history.push(VERIFY_EMAIL);
  //       })
  //       .catch(err => {
  //         setClicked(false);
  //         const status = err.response.status;
  //         if (status === 409) {
  //           const msg = err.response.data.message;
  //           if (msg === 'User with given email already exists') {
  //             setEmailConflict(true);
  //           } else setUsernameConflict(true);
  //         } else console.error(err);
  //       });
  //   };

  const onUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    // setUsername(e.target.value);
    // setUsernameConflict(false);
  };

  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    // setEmail(e.target.value);
    // setEmailConflict(false);
  };

  return (
    // <div className={styles.signUp}>
    <div className={styles.auth}>
      <main className={styles.body}>
        <Card
          className={styles.authCard}
          style={clicked ? {pointerEvents: 'none'} : {}}
        >
          {/* <form style={{ width: '400px' }}> */}
          <form>
            <div className={styles.label}>Username</div>
            <TextField
              // fullWidth
              value={username}
              // onChange={(e: React.FormEvent<HTMLInputElement>) =>
              // onUsernameChange(e)
              // }
              // {...(usernameConflict && {
              //   error: true,
              //   helperText: 'User with given username already exists'
              // })}
            />
            <div className={styles.label}>Email</div>
            <TextField
              // fullWidth
              value={email}
              // type='email'
              // autoComplete='email'
              // onChange={(e: React.FormEvent<HTMLInputElement>) =>
              //   onEmailChange(e)
              // }
              // {...(email &&
              //   !validateEmail(email) && {
              //     error: true,
              //     helperText: 'Wrong email format'
              //   })}
              // {...(emailConflict && {
              //   error: true,
              //   helperText: 'User with given email already exists'
              // })}
            />
            <div className={styles.label}>Password</div>
            <TextField
              // fullWidth
              value={password}
              {...(showPassword ? {type: 'text'} : {type: 'password'})}
              // autoComplete='current-password'
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position="end">
              //       <IconButton
              //         aria-label="toggle password visibility"
              //         onClick={handleClickShowPassword}
              //       >
              //         {showPassword ? <Visibility /> : <VisibilityOff />}
              //       </IconButton>
              //     </InputAdornment>
              //   )
              // }}
              // onChange={(e: React.FormEvent<HTMLInputElement>) =>
              //   setPassword(e.currentTarget.value)
              // }
              // {...(password &&
              //   !validatePassword(password) && {
              //     error: true,
              //     helperText:
              //       'Password must contain 8 to 128 alphanumeric characters, at least one lowercase letter, one uppercase and one digit'
              //   })}
            />
            <Button
            // fullWidth
            // className={classes.button}
            // {...((!(
            //   !!username &&
            //   validateEmail(email) &&
            //   validatePassword(password)
            // ) ||
            //   clicked) && { disabled: true })}
            // onClick={onClick}
            >
              Sign Up
            </Button>
          </form>
          <NavLink to={SIGN_IN}>I already have an account</NavLink>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
