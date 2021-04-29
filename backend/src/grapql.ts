import authController from '@controllers/AuthController';
import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        _id: String,
        nickName: String,
        email: String,
    }
    type Query {
        signIn(email: String!, password: String!): String,
        getMe: User,
    }
    type Mutation {
        registerUser(email: String!, password: String!, nickName: String!): String,
    }
`;

const resolvers = {
    Mutation: {
        registerUser: (_, { email, password, nickName }) => authController.registerUser(email, password, nickName),
    },
    Query: {
        signIn: (_, { email, password }, { res }) => authController.signInUser(email, password, res),
        getMe: (_, _t, { req }) => authController.getMe(req.userId),
    }
}

export { typeDefs, resolvers };