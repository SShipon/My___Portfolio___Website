
import { useLottie } from "lottie-react";
import laptop from "../../../assets/animate/57286-laptop-working.json";

const BannerAnimate  = () => {
  const options = {
    animationData: laptop,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default BannerAnimate;