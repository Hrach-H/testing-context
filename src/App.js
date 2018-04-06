import React, { Component } from 'react';
import ErrorHandling from 'components/ErrorHandling';
import makeLoadable from 'src/makeLoadable';

const Main = makeLoadable('./components/Main');

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
    return (
      <ErrorHandling>
        <div className="ui container">
          <Provider value={this.state.contextValue}>
            <Main changeContext={this.toggleContext} />
          </Provider>
        </div>
      </ErrorHandling>
    );
  }
}

export default App;
