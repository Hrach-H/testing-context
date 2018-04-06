import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import ErrorHandling from 'components/ErrorHandling';
import makeLoadable from 'src/makeLoadable';

const LoadableMain = makeLoadable({ path: './components/Main' });
const Home = makeLoadable({ path: './components/Home' });

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
        <nav className="ui two item menu">
          <NavLink exact to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/main" className="item">
            Main
          </NavLink>
        </nav>
      );
    };
    const View = () => {
      const Main = () => (
        <Provider value={this.state.contextValue}>
          <LoadableMain changeContext={this.toggleContext} />
        </Provider>
      );

      return (
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Using render method to pass props to the LoadableMain component through Route */}
          <Route path="/main" render={Main} />
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
