
import { useLottie } from "lottie-react";
import laptop from "../../assets/animate/103094-contact (1).json";

const ContactAnimate  = () => {
  const options = {
    animationData: laptop,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default ContactAnimate;