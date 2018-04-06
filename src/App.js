import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import ErrorHandling from 'components/ErrorHandling';
import makeLoadable from 'src/makeLoadable';

const Home = makeLoadable({ path: './components/Home' });
const LoadableContextChange = makeLoadable({ path: './components/ContextChange' });
const StateChange = makeLoadable({ path: './components/StateChange' });
const ReduxStateChange = makeLoadable({ path: './components/ReduxStateChange' });

export const AppContext = React.createContext();
const { Provider } = AppContext;

class App extends Component {
  state = {
    contextValue: 'default context'
  };

  toggleContext = () => {
    this.setState({
      contextValue: this.state.contextValue === 'default context' ? 'changed context' : 'default context'
    });
  };

  render() {
    const Navigation = () => {
      return (
        <nav className="ui four item menu">
          <NavLink exact to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/context" className="item">
            Change App Context
          </NavLink>
          <NavLink to="/state" className="item">
            Change Component State
          </NavLink>
          <NavLink to="/redux-state" className="item">
            Change Redux State
          </NavLink>
        </nav>
      );
    };
    const View = () => {
      const ContextChange = () => (
        <Provider value={this.state.contextValue}>
          <LoadableContextChange changeContext={this.toggleContext} />
        </Provider>
      );

      return (
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Using render method to pass props to the LoadableMain component through Route */}
          <Route path="/context" render={ContextChange} />
          <Route path="/state" component={StateChange} />
          <Route path="/redux-state" component={ReduxStateChange} />
        </Switch>
      );
    };

    return (
      <div className="ui container">
        <ErrorHandling>
          <Navigation />
          <View />
        </ErrorHandling>
      </div>
    );
  }
}

export default App;
