import React from 'react';

//create a context
const UserContext = React.createContext();

//create a provider
const UserProvider=UserContext.Provider;

//create a consumer
const UserConsumer=UserContext.Consumer;

export {UserProvider,UserConsumer}