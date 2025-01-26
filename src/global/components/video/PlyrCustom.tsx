import { usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import "./styles/customPlyr.css";

const PlyrCustom = ({ source, options = null, ref, ...rest }: any) => {
  const raptorRef = usePlyr(ref, {
    source,
    options,
  });
  return <video ref={raptorRef} className="plyr plyr-react" {...rest} />;
};

export default PlyrCustom;
