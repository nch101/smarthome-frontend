import { Switch, Route, Redirect }    from 'react-router-dom';

import HomePage             from '../pages/HomePage';
import ControlPage          from '../pages/ControlPage';
import StatisticPage        from '../pages/StatisticPage';

function RoutesPage() {
  return (
    <Switch>
      <Route path = '/' exact   ><Redirect to = '/home'/></Route>
      <Route path = '/home'     ><HomePage /></Route>
      <Route path = '/control'  ><ControlPage /></Route>
      <Route path = '/statistic'><StatisticPage /></Route>     
    </Switch>
  );
}

export default RoutesPage;