import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const init = async () => {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());
  app.get("/", (req, res) => {
    res.json({ message: "server is up and running" });
  });

  //create graphQl server
  const gqlServer = new ApolloServer({
    typeDefs: `
    type Query{
    hello:String,
    say(name:String):String
    }
    `, //schema
    resolvers: {
      Query: {
        hello: () => "hello from gql server",
        say: (_, { name }: { name: String }) => `hey ${name}, kasa ahes?`,
      },
    },
  });

  //start the gqlsvr
  await gqlServer.start();

  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
};
init();
