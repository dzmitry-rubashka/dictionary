import HomePageLayout from "../components/homePageLayout";

import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useParams} from "react-router-dom";
import {useCallback, useEffect} from "react";

import {GET_WORD_REQUEST} from "../actions";

const HomePageContainer = () => {

  const dispatch = useDispatch();
  const {info, isLoading} = useSelector(state => state.word);
  // const history = useHistory();
  const {word} = useParams();
  // console.log(info)


  // const handleGoToWord = useCallback((word) => {
  //   history.push(`/home/${word}`);
  // }, [word]);


  useEffect(()=> {
    dispatch(GET_WORD_REQUEST(word))
  },[dispatch, word])

  return (
    <HomePageLayout
      isLoading={isLoading}
      word={info.word}
      //handleGoToWord={handleGoToWord}
    />
  );
};

export default HomePageContainer;
