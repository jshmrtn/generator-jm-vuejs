import Vue from 'vue';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import VueApollo from 'vue-apollo';

// Create the apollo client
export const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://localhost:3020/graphql',
  }),
  connectToDevTools: true,
});

// Install the vue plugin
Vue.use(VueApollo)

// Add provider
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    // $loadingKey: 'loading',
  },
  errorHandler (error) {
    console.error(error);
  },
});
