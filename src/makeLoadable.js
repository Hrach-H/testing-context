import React from 'react';
import Loadable from 'react-loadable';
import { Loader, Dimmer, Segment } from 'semantic-ui-react';

/**
 * @function
 * @description Makes a component dynamically imported via Loadable library
 * @param {Object} config
 * @param {string} config.path - path to the component
 * @param {boolean} config.loader - if true shows a loader while the component is being loaded
 */
export default function makeLoadable({ path, loader = false } = {}) {
  return Loadable({
    loader: () => import(`${path}`),
    loading() {
      if (loader) {
        return (
          <Segment>
            <Dimmer active>
              <Loader size="large">Loading</Loader>
            </Dimmer>
          </Segment>
        );
      } else {
        return <p>Loading...</p>;
      }
    }
  });
}
