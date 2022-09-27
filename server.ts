const { ApolloServer } = require("apollo-server");
import { typeDefs, resolvers } from "./schema";
import dotenv from "dotenv";
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    //context for authentication where every resolver will access this context
    return { req };
  },
});

server.listen().then(({ url }) => {
  console.log(`api is working at ${url}`);
});
