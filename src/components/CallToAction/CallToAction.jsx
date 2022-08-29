import CTA1 from "../../assets/images/CTA1.png";
import CTA2 from "../../assets/images/CTA2.png";
import CallToActionContainer from "./CallToAction.styled";
import Button from "../Button/Button";

const CallToAction = () => {
  return (
    <CallToActionContainer>
      <img className="CTA1Style" src={CTA1} alt="" />
      <div className="centerContainer">
        <h3>Get in touch with us for your service related query</h3>
        <Button color={false} text={"Contact us"} />
      </div>
      <img className="CTA2Style" src={CTA2} alt="" />
    </CallToActionContainer>
  );
};

export default CallToAction;
