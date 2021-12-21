import {useSelector} from "react-redux";

const ResultPageLayout = ({}) => {

  const {info, isLoading, isError, error} = useSelector(state => state.word);


  return (
    <div>
      <h1>{isError ? error.response : info[0].word}</h1>
    </div>
  );
};

export default ResultPageLayout;
