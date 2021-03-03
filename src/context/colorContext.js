import React from 'react';

//create a context
const ColorContext = React.createContext();

//create a provider
const ColorProvider=ColorContext.Provider;

//create a consumer
const ColorConsumer=ColorContext.Consumer;

export {ColorProvider,ColorConsumer}