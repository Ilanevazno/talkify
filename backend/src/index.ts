import express = require('express');
import mongoose = require('mongoose');
import { ApolloServer } from 'apollo-server-express';
import * as cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';

import { ACCESS_TOKEN_KEY, MONGO_USER, MONGO_PASSWORD } from './constants';
import { typeDefs, resolvers } from './grapql';

const app = express();
const port = process.env.port || 5000;

app.use(cookieParser());
app.use(express.json())
app.use((req, _, next) => {
    const accessToken = req.cookies['access-token'];

    if (accessToken) {
        const { userId } = verify(accessToken, ACCESS_TOKEN_KEY);
        (<any>req).userId = userId;
    }

    next();
})

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@talkify.wtgcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
 });

server.applyMiddleware({ app });

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});