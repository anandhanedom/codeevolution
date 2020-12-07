import React from 'react';

import { UserContext, ChannelContext } from '../App.js';

const ComponentF = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <ChannelContext.Consumer>
            {(channel) => {
              return (
                <div>
                  User context value : {user} <br />
                  Channel context value : {channel}
                </div>
              );
            }}
          </ChannelContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ComponentF;
