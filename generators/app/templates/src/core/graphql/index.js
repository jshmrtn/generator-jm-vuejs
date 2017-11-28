import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-client';
import {
  HttpLink,
} from 'apollo-link-http';
import {
  InMemoryCache,
} from 'apollo-cache-inmemory';

import {
  graphqlRoot,
} from 'Src/client.config.json';

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: graphqlRoot,
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  connectToDevTools: true,
});

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient,
});

// Add provider
export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
