import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// import { fetchLearderboards } from "../utils/getData";
import { fetchLearderboards } from "../redux/leaderboardsSlice";

export default function useFecthData() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    switch (pathname) {
      //   case "/":
      //     dispatch(());
      //     break;
      case "/leaderboads":
        dispatch(fetchLearderboards());
        break;
      //   case "/":
      //     dispatch(());
      //     break;
      default:
        break;
    }
  }, [dispatch, pathname]);
}
