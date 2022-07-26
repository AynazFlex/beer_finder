import { FC } from "react";
import "./Preloader.scss";

const Preloader: FC = () => {
  return (
    <div className="preloader">
      <div className="box">
        <div className="container">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  );
}


export default Preloader;
