import { FC, useEffect } from "react";
import withPreloader from "../../hoc/withPreloader";
import { useDispatch, useSelector } from "react-redux";
import "./OpenBeer.scss";
import { AppDispatch, RootState } from "../../store/store";
import { setBeerThunk } from "../../store/beersReducer";
import { useNavigate, useParams } from "react-router-dom";

const Beer = withPreloader(() => {
  const navigate = useNavigate();
  const beer = useSelector((state: RootState) => state.beers.openBeer);

  return (
    <div className="openbeer-wrapper">
      {beer.length === 1 && (
        <>
          <div className="openbeer-image-container">
            <img src={beer[0].image_url} alt="beer" />
          </div>
          <div className="openbeer-info-container">
            <button onClick={() => navigate(-1)}>&laquo; назад</button>
            <div className="openbeer-name" >{beer[0].name}</div>
            <div className="openbeer-abv" >{beer[0].abv}</div>
            <div className="openbeer-tagline" >{beer[0].tagline}</div>
            <div className="openbeer-food_pairing">{beer[0].food_pairing.join('/')}</div>
            <div className="openbeer-description" >{beer[0].description}</div>
          </div>
        </>
      )}
    </div>
  );
});

const OpenBeer: FC = () => {
  const { id } = useParams();
  const dispatch: (AnyAction: any) => AppDispatch = useDispatch();

  useEffect(() => {
    id && dispatch(setBeerThunk(id));
  }, []);

  return <Beer />;
};

export default OpenBeer;
