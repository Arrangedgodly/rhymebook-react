function Login() {
  return (
    <form className="login">
      <h3 className="login__title">Login</h3>
      <label
        htmlFor="email"
        className="login__label"
      >Email
        <input
          type='text'
          className='login__input'
          name="email"
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
        />
      </label>
      <p className="login__footer">
        Don't have an account? Create one <a className="login__link">here.</a>
      </p>
    </form>
  )
}

export default Login;