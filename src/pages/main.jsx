import React, { useContext, createContext, useState, Component } from "react";
import {
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import FBAInventoryPage from "./fba_inventory";
import FBAInventoryEventsPage from "./fba_inventory_events";
import FBAOutboundShipmentsPage from "./fba_outbound_shipments";
import FBAOrdersPage from "./fba_orders";
import FBAInventoryAgePage from "./fba_inventory_age";
import FBAReturnsPage from "./fba_returns";
import HomePage from "./home";
import LoginPage from "./login";
import LogoutPage from "./logout";
import FBARemovalOrdersPage from "./fba_removal_orders";
import FBAInboundShipmentsPage from "./fba_inbound_shipments";
import FbaInboundShipmentsPackagesPage from "./fba_inbound_shipments_packages";
import FBAReplacementOrders from "./fba_replacement_orders"
import FBAReimbursements from "./fba_reimbursements"
import FBAInventoryAdjustments from "./fba_inventory_adjustments"
import FbaRemovalShipments from "./fba_removal_shipments"
import ExamplePage from './sub_row_example_page';

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

class Main extends Component {
  render() {
    console.log("Props: ", this.props)
    return (
      <ProvideAuth>
        <HashRouter>
          <div>
            <div className="content">
              <Route exact path="/" component={HomePage}/>
              <Route path="/AmazonFBA/InventoryEvents" component={FBAInventoryEventsPage}/>
              <PrivateRoute path="/AmazonFBA/Inventory" component={FBAInventoryPage}/>
              <Route path="/AmazonFBA/InventoryAge" component={FBAInventoryAgePage}/>
              <Route path="/AmazonFBA/Orders" component={FBAOrdersPage}/>
              <Route path="/AmazonFBA/OutboundShipments" component={FBAOutboundShipmentsPage}/>
              <Route path="/AmazonFBA/Returns" component={FBAReturnsPage}/>
              <Route path="/AmazonFBA/RemovalOrders" component={FBARemovalOrdersPage}/>
              <Route path="/AmazonFBA/InboundShipmentsPackages" component={FbaInboundShipmentsPackagesPage}/>
              <Route path="/AmazonFBA/InboundShipments" component={FBAInboundShipmentsPage}/>
              <Route path="/AmazonFBA/ReplacementOrders" component={FBAReplacementOrders}/>
              <Route path="/AmazonFBA/Reimbursements" component={FBAReimbursements}/>
              <Route path="/AmazonFBA/InventoryAdjustments" component={FBAInventoryAdjustments}/>
              <Route path="/AmazonFBA/RemovalShipments" component={FbaRemovalShipments}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/logout" component={LogoutPage}/>
              <Route path="/" component={HomePage}/>

            </div>
          </div>
        </HashRouter>
      </ProvideAuth>
    );
  }
}

export default Main
