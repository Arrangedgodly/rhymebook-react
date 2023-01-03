function Footer({ loggedIn }) {
  return (
    <footer className={loggedIn ? "footer" : "footer footer-alt"}>
      <h3 className="footer-text">Created by Grady Wasil</h3>
    </footer>
  );
}

export default Footer;