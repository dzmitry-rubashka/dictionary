import HomePageLayout from "../components/homePageLayout";

import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useParams} from "react-router-dom";
import {useCallback, useEffect} from "react";

import {GET_WORD_REQUEST} from "../actions";

const HomePageContainer = () => {


  const history = useHistory();



  const handleGoToWord = (word) => {
    history.push(`/home/${word}`);
  }




  return (
    <HomePageLayout

      handleGoToWord={handleGoToWord}
    />
  );
};

export default HomePageContainer;
