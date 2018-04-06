import React from 'react';
import Loadable from 'react-loadable';
import { Loader, Dimmer, Segment } from 'semantic-ui-react';

// The path should be specified relative to ./src folder
export default function makeLoadable(path) {
  return Loadable({
    loader: () => import(`${path}`),
    loading() {
      return (
        <Segment>
          <Dimmer active>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        </Segment>
      )
    }
  });
}