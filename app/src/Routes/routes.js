import {Switch, Route, Redirect} from "react-router-dom";

import {ROUTES} from "./routesNames";

import ErrorPageLayout from '../pages/errorPage/components/errorPageLayout';
import HomePageContainer from '../pages/homePage/containers/homePageContainer';
import ResultPageContainer from '../pages/resultPage/containers/resultPageContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>;
      <Route path={ROUTES.RESULT_PAGE} component={ResultPageContainer}/>;
      <Route path={ROUTES.ERROR_PAGE} component={ErrorPageLayout}/>;
      <Redirect path='*' to={ROUTES.HOME_PAGE}/>;
    </Switch>
  );
};

export default Routes;
