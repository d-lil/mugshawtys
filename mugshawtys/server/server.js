const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const stripe = require("stripe")('sk_test_51NGXs7FAXUOYrBpZ5fasB4Lxhj9MYTpJWBntzqtyo7s0GRMdIr97dI6d8Is4glrPPUdhTlatB7cMgOBbFFpZPiZP00YCcdimd8');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
// import { CometChat } from "@cometchat-pro/chat";

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// const appID = "2405963263c8d6a0";
// const region = "US";
// const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
// CometChat.init(appID, appSetting).then(
//   () => {
//     console.log("Initialization completed successfully");
//     // You can now call login function.
//   },
//   error => {
//     console.log("Initialization failed with error:", error);
//     // Check the reason for error and take appropriate action.
//   }
// );



// let authKey = "03092ffe83fa55ea6927a72f072c5ddbb8843ffd";
// var uid = "INMATE1";
// var name = "INMATE";

// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//     user => {
//         console.log("user created", user);
//     },error => {
//         console.log("error", error);
//     }
// )



app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


// app.use(routes);
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`API server wylin' on port ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
  })
};

startApolloServer();