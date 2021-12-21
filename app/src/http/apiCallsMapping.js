import * as homePageActions from '../pages/homePage/actions';
import * as homePageAPI from '../pages/homePage/api';

const apiCallsMapping = (action) => {
  const mapping = {
    [homePageActions.GET_WORD_REQUEST]: homePageAPI.getWord,
  };
  return mapping[action.type]
}

export default apiCallsMapping