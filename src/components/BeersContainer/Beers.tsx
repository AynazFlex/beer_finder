import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import withPreloader from "../../hoc/withPreloader";
import { loadMorebeersThunk } from "../../store/beersReducer";
import { AppDispatch, RootState } from "../../store/store";
import Beer from "./Beer";
import "./Beers.scss";

const Beers: FC = () => {
  const items = useSelector((state: RootState) => state.beers.items);
  const isLoadingMore = useSelector(
    (state: RootState) => state.beers.isLoadingMore
  );
  const dispatch: (AnyAction: any) => AppDispatch = useDispatch();

  return (
    <div className="beers-wrapper">
      <div className="beers-container">
        {items?.map((item) => (
          <Beer key={item.id} {...item} />
        ))}
      </div>
      {items.length > 29 &&
        (isLoadingMore ? (
          <div className="beers-more-dis">LOADING...</div>
        ) : (
          <div
            onClick={() => dispatch(loadMorebeersThunk())}
            className="beers-more"
          >
            MORE
          </div>
        ))}
    </div>
  );
};

export default withPreloader(Beers);
