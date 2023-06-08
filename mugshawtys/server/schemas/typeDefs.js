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
    inmateId: ID
    inmateName: String
    inmateImage: String
    inmateGender: String
    inmateAge: String
    inmateAbout: String
  }
  
  input InmateInput {
    inmateId: ID
    inmateName: String
    inmateImage: String
    inmateGender: String
    inmateAge: String
    inmateAbout: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
    inmate(inmateId: ID!): Inmate
    inmates: [Inmate]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, age: String!, gender: String! ): Auth
    login(email: String!, password: String!): Auth
    updateUser(image: String, preferences: String, about: String): User
    saveInmate(inmateInfo: InmateInput!): User
    removeInmate(inmateId: ID!): User
  }
`;

module.exports = typeDefs;