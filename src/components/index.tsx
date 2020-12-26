import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./common";

import { Home, Saved } from "./pages";

const Components = () => {
  return (
    <main className='container bg-light'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/saved' component={Saved} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default Components;
