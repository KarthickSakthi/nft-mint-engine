import "./NFTMintForm.scss";
import GradientButton from "../GradientButton/GradientButton";
const NFTMintForm = () => {
  return (
    <div className={"form-container"}>
      <img className={"image-height"}
        src={ 
"https://miro.medium.com/max/980/1*3iesg_sr8kC6NYN2iiFHRQ.png"        }
      />
      <input placeholder={"Title"} />
      <textarea placeholder={"Description"} />
      <GradientButton buttonText={"MINT NFT"} />
    </div>
  );
};

export default NFTMintForm;
