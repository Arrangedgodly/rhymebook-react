import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Header />
      {loggedIn
        ? (
        <Main />
      ) : (
        <Login />
      )}
      <Footer 
        loggedIn={loggedIn}
      />
    </>
  );
}

export default App;
