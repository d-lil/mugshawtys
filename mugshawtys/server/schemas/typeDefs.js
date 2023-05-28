const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    preferences: String
    about: String
    savedInmates: [Inmate]
  }

  type Inmate {
    inmateId: ID
    name: String
    image: String
  }
  
  input InmateInput {
    name: String
    image: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(preferences: String, about: String): User
    saveInmate(input: InmateInput): User
    removeInmate(inmateId: ID!): User
  }
`;

module.exports = typeDefs;