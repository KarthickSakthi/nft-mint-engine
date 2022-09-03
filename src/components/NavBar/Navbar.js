import Logo from "../../assets/NFT_Icon.png";
import "./Navbar.css";
import GradientButton from "../GradientButton/GradientButton";

const Navbar = (props) => {
  return (
    <div className={"navbar-container"}>
      <img className={"logo-container"} src={Logo} />
      <GradientButton buttonText={"Connect Wallet"} />
    </div>
  );
};

export default Navbar;
