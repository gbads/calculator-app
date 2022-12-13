const Footer = ({ author }) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {author} {year}</p>
    </footer>
  );
}

Footer.defaultProps = {
  author: null
};

export default Footer;