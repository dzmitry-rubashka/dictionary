import * as resultPageActions from '../pages/resultPage/actions';
import * as resultPageAPI from '../pages/resultPage/api';

const apiCallsMapping = (action) => {
  const mapping = {
    [resultPageActions.GET_WORD_REQUEST]: resultPageAPI.getWord,
  };
  return mapping[action.type]
}

export default apiCallsMapping