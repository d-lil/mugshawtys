var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
};
var gql = require('apollo-server-express').gql;
var typeDefs = gql(__makeTemplateObject(["\n  type User {\n    _id: ID\n    username: String\n    email: String\n    password: String\n    image: String\n    gender: String\n    age: String\n    preferences: String\n    about: String\n    savedInmates: [Inmate]\n  }\n\n  type Inmate {\n    _id: ID\n    inmateName: String\n    inmateImage: String\n    inmateGender: String\n    inmateAge: String\n    inmateAbout: String\n  }\n  \n  input InmateInput {\n    username: String\n    image: String\n  }\n\n  type Auth {\n    token: ID\n    user: User\n  }\n\n  type Query {\n    me: User\n    inmates: [Inmate]\n  }\n\n  type Mutation {\n    addUser(username: String!, email: String!, password: String!, age: String!, gender: String! ): Auth\n    login(email: String!, password: String!): Auth\n    updateUser(image: String, preferences: String, about: String): User\n    saveInmate(input: InmateInput): User\n    removeInmate(inmateId: ID!): User\n  }\n"], ["\n  type User {\n    _id: ID\n    username: String\n    email: String\n    password: String\n    image: String\n    gender: String\n    age: String\n    preferences: String\n    about: String\n    savedInmates: [Inmate]\n  }\n\n  type Inmate {\n    _id: ID\n    inmateName: String\n    inmateImage: String\n    inmateGender: String\n    inmateAge: String\n    inmateAbout: String\n  }\n  \n  input InmateInput {\n    username: String\n    image: String\n  }\n\n  type Auth {\n    token: ID\n    user: User\n  }\n\n  type Query {\n    me: User\n    inmates: [Inmate]\n  }\n\n  type Mutation {\n    addUser(username: String!, email: String!, password: String!, age: String!, gender: String! ): Auth\n    login(email: String!, password: String!): Auth\n    updateUser(image: String, preferences: String, about: String): User\n    saveInmate(input: InmateInput): User\n    removeInmate(inmateId: ID!): User\n  }\n"]));
module.exports = typeDefs;
