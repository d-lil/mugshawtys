const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    image: String
    gender: String
    age: String
    preferences: String
    about: String
    savedInmates: [Inmate]
  }

  type Inmate {
    _id: ID
    inmateName: String
    inmateImage: String
    inmateGender: String
    inmateAge: String
    inmateAbout: String
  }
  
  input InmateInput {
    username: String
    image: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    inmates: [Inmate]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, age: String!, gender: String! ): Auth
    login(email: String!, password: String!): Auth
    updateUser(image: String, preferences: String, about: String): User
    saveInmate(input: InmateInput): User
    removeInmate(inmateId: ID!): User
  }
`;

module.exports = typeDefs;