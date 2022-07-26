import { FC, useState } from "react";
import { setBeersThunk } from "../../store/beersReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

const Search: FC = () => {
  const [text, setText] = useState("");
  const dispatch: (AnyAction: any) => AppDispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(setBeersThunk(text));
    navigate('/', { replace: true })
  };

  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="search-body">
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="start the search"
          value={text}
        />
        <button onClick={(e) => submit(e)}>Поиск</button>
      </div>
    </form>
  );
};

export default Search;
