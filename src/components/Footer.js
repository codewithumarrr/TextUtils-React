const bg = {
   backgroundColor:"rgba(0, 0, 0, 0.2)",
   marginTop:"60%",
};
function Footer() {
   
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3"
        style={bg}
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          HTML
        </a>
      </div>
    </footer>
  );
}

export default Footer;
