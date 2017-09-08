import Vue from 'vue';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import VueApollo from 'vue-apollo';
import { graphqlRoot } from 'src/client.config.json';

// Create the apollo client
export const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: graphqlRoot,
  }),
  connectToDevTools: true,
});

// Install the vue plugin
Vue.use(VueApollo, { apolloClient });

// Add provider
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler (error) {
    console.error(error);
  },
});
