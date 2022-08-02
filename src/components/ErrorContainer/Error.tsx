import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/beersReducer";
import { AppDispatch } from "../../store/store";
import "./Error.scss";

const Error: FC<{ error: string }> = ({ error }) => {
  const dispatch: (AnyAction: any) => AppDispatch = useDispatch();

  useEffect(() => {
    document.body.onclick = (e) => {
      const elem = e.target as HTMLElement;
      if (
        elem.className === "error-close" ||
        elem.className === "error-wrapper"
      ) {
        dispatch(actions.setError(""));
      }
    };
    return () => {
      document.body.onclick = null;
    };
  }, []);

  return (
    <div className="error-wrapper">
      <div className="error-body">
        <div className="error-text">{error}</div>
        <div className="error-close" />
      </div>
    </div>
  );
};

export default Error;
