import { FC } from "react";
import { useSelector } from "react-redux";
import Preloader from "../components/PreloaderContainer/Preloader";
import { RootState } from "../store/store";

const withPreload = (Component: FC) => {

    return () => {
        const fetching = useSelector((state: RootState) => state.beers.fetching)
        return fetching ? <Preloader/> : <Component/>
    }
};

export default withPreload;