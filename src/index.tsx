import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core components
import Login from './layouts/Login';
import Admin from './layouts/Admin';
import Coordinador from './layouts/Coordinador';
import Docente from './layouts/Docente';
import Invitado from './layouts/Invitado';

import {userProfilesObject} from './constants/generalConstants';

import 'assets/css/material-dashboard-react.css?v=1.6.0';

const hist = createBrowserHistory();

function IndexApp(props: any) {
  const [islogged, setIsLogged] = useState('');

  useEffect(() => {
    var activeSession = localStorage.getItem('token');
    setIsLogged(activeSession ? activeSession : '');
  });

  const getRouteByProfile = () => {
    var idProfile = localStorage.getItem('idProfileLoggedUser');
    switch (idProfile) {
      case userProfilesObject.admin.id.toString():
        return (

          <Switch>
            <Route path="/admin" component={Admin} />
            <Redirect to={'/admin/dashboard'} from={'/'} />
          </Switch>

        );
        break;
      case userProfilesObject.coor.id.toString():
        return (

          <Switch>
            <Route path="/coordinador" component={Coordinador} />
            <Redirect to={'/coordinador/actas'} from={'/'} />
          </Switch>

        );
        break;
      case userProfilesObject.doc.id.toString():
        return (

          <Switch>
            <Route path="/docente" component={Docente} />
            <Redirect to={'/docente/actas'} from={'/'} />
          </Switch>

        );
        break;

      default:
        return (
          <Switch>
            <Route path="/invitado" component={Invitado} />
            <Redirect to={'/invitado/micrositio'} from={'/'} />
          </Switch>
        );
        break;
    }
  }


  return (
    <Router history={hist}>
      {
        islogged ?
          getRouteByProfile()
          :
          <Switch>
            <Route path="/login" component={Login} />
            <Redirect to={'/login'} from={'/'} />
          </Switch>
      }
    </Router>
  );
};

ReactDOM.render(<IndexApp />, document.getElementById('root'))


// ReactDOM.render(
//   // tslint:disable-next-line: jsx-wrap-multiline
//   <Router history={hist}>
//     <Switch>
//       {
//         islogged ?
//           <div>
//             <Route path="/admin" component={Admin} />
//             <Route path="/coordinador" component={Coordinador} />
//             <Route path="/docente" component={Docente} />
//             <Redirect to={'/admin/dashboard'} from={'/'}/>
//           </div>
//           :
//           <div>
//             <Route path="/login" component={Login} />
//             <Redirect to={'/login'} from={'/'}/>
//           </div>

//       }
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// )
