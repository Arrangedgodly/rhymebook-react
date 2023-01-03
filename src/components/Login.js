import { useForm } from "../utils/constants";
import { useState } from 'react';

function Login({ handleLogin, handleCreateUser }) {
  const {values, handleChange, setValues} = useForm({});
  const [newUser, setNewUser] = useState(true);

  const handleNewUserChange = () => {
    setNewUser(!newUser);
  }

  function handleCreateSubmit(e) {
    e.preventDefault();
    handleCreateUser(values.name, values.avatar, values.email, values.password)
    setNewUser(false);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    handleLogin(values.email, values.password);
  }

  return (
    <form className="login">
      {newUser ? (
        <>
        <h3 className="login__title">Create an Account</h3>
        <label
          htmlFor="name"
          className="login__label"
        >Name
          <input
            type='text'
            className='login__input'
            name="name"
            value={values.name || ''}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="avatar"
          className="login__label"
        >Avatar
          <input
            type='text'
            className='login__input'
            name="avatar"
            value={values.avatar || ''}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="email"
          className="login__label"
        >Email
          <input
            type='text'
            className='login__input'
            name="email"
            value={values.email || ''}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="password"
          className="login__label"
        >Password
          <input
            type='text'
            className='login__input'
            name="password"
            value={values.password || ''}
            onChange={handleChange}
          />
        </label>
        <button
          type='button'
          className='login__submit'
          onClick={handleCreateSubmit}
        >
          Sign Me Up!
        </button>
        <p className="login__footer">
          Already a user? Log in <a className="login__link" onClick={handleNewUserChange}>here.</a>
        </p>
        </>
      ) : 
      (
        <>
      <h3 className="login__title">Login</h3>
      <label
        htmlFor="email"
        className="login__label"
      >Email
        <input
          type='text'
          className='login__input'
          name="email"
          value={values.email || ''}
          onChange={handleChange}
        />
      </label>
      <label
        htmlFor="password"
        className="login__label"
      >Password
        <input
          type='text'
          className='login__input'
          name="password"
          value={values.password || ''}
          onChange={handleChange}
        />
      </label>
      <button
        type='button'
        className='login__submit'
        onClick={handleLoginSubmit}
      >
        Log Me In!
      </button>
      <p className="login__footer">
        Don't have an account? Create one <a className="login__link" onClick={handleNewUserChange}>here.</a>
      </p>
      </>
      )}
    </form>
  )
}

export default Login;