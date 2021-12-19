import * as resultPageActions from '../pages/homePage/actions';
import * as resultPageAPI from '../pages/homePage/api';

const apiCallsMapping = (action) => {
  const mapping = {
    [resultPageActions.GET_WORD_REQUEST]: resultPageAPI.getWord,
  };
  return mapping[action.type]
}

export default apiCallsMapping