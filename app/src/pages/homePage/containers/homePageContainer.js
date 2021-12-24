import HomePageLayout from "../components/homePageLayout";

import {useHistory} from "react-router-dom";

const HomePageContainer = () => {

  const history = useHistory();

  const handleGoToWord = (word) => {
    history.push(`/result/${word}`);
  }

  return (
    <HomePageLayout
      handleGoToWord={handleGoToWord}
    />
  );
};

export default HomePageContainer;
