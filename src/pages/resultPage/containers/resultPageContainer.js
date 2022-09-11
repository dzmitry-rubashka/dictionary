import ResultPageLayout from "../components/resultPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";

import { GET_WORD_REQUEST } from "../../homePage/actions";

const ResultPageContainer = () => {
  const dispatch = useDispatch();
  const { info, isLoading, isError, error } = useSelector(
    (state) => state.word
  );
  const { word } = useParams();

  useLayoutEffect(() => {
    dispatch(GET_WORD_REQUEST(word));
  }, [dispatch, word]);

  return (
    <ResultPageLayout
      info={info}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};

export default ResultPageContainer;
