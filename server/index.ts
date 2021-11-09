import express from "express";
import { ApolloServer } from "apollo-server-express";
import { API, APIInterface } from "./src/api";
import schema from "./src/graphql/combinedSchema";

export interface apolloContext {
  api: APIInterface;
}

const app = express();
const port = 3000;

const startServer = async () => {
  const apollo = new ApolloServer<apolloContext>({
    schema,
    context: {
      api: API,
    },
  });

  await apollo.start();

  apollo.applyMiddleware({ app, path: "/graphql" });

  app.listen(port, () => {
    console.log(
      `Timezones by location application is running on port ${port}.`
    );
  });
};

startServer();
