import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';
import { checkAuth, login, createUser } from "./utils/api";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = () => {
    checkAuth(localStorage.getItem('jwt'))
      .then(user => {
        if (user) {
          setLoggedIn(true);
          setCurrentUser(user);
        } else {
          setLoggedIn(false);
          setCurrentUser({});
        }
      })
      .catch(err => console.log(err));
  }

  const handleLogin = (email, password) => {
    setIsLoading(true);
    login(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        handleAuth();
        setLoggedIn(true);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  const handleCreateUser = (name, avatar, email, password) => {
    setIsLoading(true);
    createUser(name, avatar, email, password)
      .then(res => {
        handleLogin(res.email, password);
        setLoggedIn(true);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    handleAuth()
  }, [])

  return (
    <>
      <Header 
        loggedIn={loggedIn}
        currentUser={currentUser}
      />
      {loggedIn
        ? (
        <Main />
      ) : (
        <Login 
          handleLogin={handleLogin}
          handleCreateUser={handleCreateUser}
        />
      )}
      <Footer 
        loggedIn={loggedIn}
      />
    </>
  );
}

export default App;
