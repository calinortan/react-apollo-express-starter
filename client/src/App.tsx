import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import UserList from "./components/UserList";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <UserList />
    </ApolloProvider>
  );
}

export default App;
