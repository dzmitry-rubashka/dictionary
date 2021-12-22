import ResultPageLayout from "../components/resultPageLayout";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {GET_WORD_REQUEST} from "../../homePage/actions";

const ResultPageContainer = () => {

  const dispatch = useDispatch();
  const {info, isLoading, isError, error} = useSelector(state => state.word);
  const {word} = useParams();

  useEffect((info)=> {
    dispatch(GET_WORD_REQUEST(word))
  },[dispatch, word])


  return <ResultPageLayout

  />
};

export default ResultPageContainer;
