import "./footer.styles.scss";
import submitImg from "../../assets/01/path-copy-4@2x.png";

const Footer = ()=>{
    return (
        <footer>
        <p className="footer-text">Got Jokes? Get Paid For Submitting</p>
        <div className="submit">
          {" "}
          <p>SUBMIT JOKE </p> <img src={submitImg} />
        </div>
      </footer>
    )
}

export default Footer;