import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {SIGN_UP} from '@/config/routes';
import Card from '@/components/card';
import Button from '@/components/button';
import TextField from '@/components/textField';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from './SignIn.scss';
// import AuthApi from '../../data/api/AuthApi';
// import { validateEmail } from '../../utils/validators';

// const SignIn = ({ signIn }) => {
const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [clicked, setClicked] = useState(false);

  const [failed, setFailed] = useState(false);

  const history = useHistory();
  //   const onClick = () => {
  //     setClicked(true);
  //     setFailed(false);
  //     AuthApi.signIn({ email, password })
  //       .then((res) => {
  //         localStorage.setItem('isLoggedIn', 'true');
  //         signIn();
  //         history.push(BOARD);
  //       })
  //       .catch((err) => {
  //         setClicked(false);
  //         const status = err.response.status;
  //         if (status === 401) {
  //           setFailed(true);
  //         } else if (status === 403) {
  //           history.push(VERIFY_EMAIL);
  //         } else console.error(err);
  //       });
  //   };

  return (
    <div className={styles.auth}>
      {/* <Navbar style={{position: 'static'}} /> */}
      <main className={styles.body}>
        <Card
          className={styles.authCard}
          style={clicked ? {pointerEvents: 'none'} : {}}
        >
          {/* <form style={{ width: '400px' }}> */}
          <form>
            <div className={styles.label}>Email</div>
            <TextField
              // fullWidth
              value={email}
              // type='email'
              // autoComplete='email'
              // onChange={(e) => setEmail(e.target.value)}
              // {...(email &&
              //   !validateEmail(email) && {
              //     error: true,
              //     helperText: 'Wrong email format'
              //   })}
            />
            <div className={styles.label}>Password</div>
            <TextField
              // fullWidth
              value={password}
              // {...(showPassword ? { type: 'text' } : { type: 'password' })}
              // autoComplete='current-password'
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position='end'>
              //       <IconButton
              //         aria-label='toggle password visibility'
              //         onClick={handleClickShowPassword}
              //       >
              //         {showPassword ? <Visibility /> : <VisibilityOff />}
              //       </IconButton>
              //     </InputAdornment>
              //   )
              // }}
              // onChange={(e) => setPassword(e.target.value)}
              // {...(failed && {
              //   error: true,
              //   helperText: 'Wrong password'
              // })}
            />
            <Button
            // fullWidth
            // className={classes.button}
            // {...((!(validateEmail(email) && !!password) || clicked) && {
            //   disabled: true
            // })}
            // onClick={onClick}
            >
              Sign In
            </Button>
          </form>
          <NavLink to={SIGN_UP}>I have no account</NavLink>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
