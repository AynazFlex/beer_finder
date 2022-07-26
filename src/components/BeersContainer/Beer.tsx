import { FC } from "react";
import { NavLink } from "react-router-dom";
import { beers } from "../../api/beersApi";
import "./Beers.scss";

const Beer: FC<beers> = ({ name, description, image_url, id }) => {
  return (
      <NavLink to={`beer/${id}`} className="beer-container">
        <img src={image_url} alt="beer" />
        <div className="beer-info">
          <div className="beer-title">{name}</div>
          <div className="beer-description">
            {description.length > 140
              ? `${description.slice(0, 140)}...`
              : description}
          </div>
        </div>
      </NavLink>
  );
};

export default Beer;
