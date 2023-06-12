const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

// Define resolvers for GraphQL
const resolvers = {
    Query: {
        // Resolver for current user
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id}).populate('savedInmates');
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // Resolver for all users
        users: async () => {
            return User.find()
        },

        // Resolver for specific inmate by ID
        inmate: async (parent, { inmateId }) => {
            return User.findOne({ inmateId });
        },

        // Resolver for all inmates
        inmates: async (parent, args) => {
            return User.find();
        },
        },

    Mutation: {
        // Resolver for adding a user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        // Resolver for login functionality
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
       
        // Resolver for updating a user
        updateUser: async (parent, args, context) => {
            const user = await User.findOneAndUpdate(
                { _id: context.user._id },
                args,
                { new: true }
            );

            return user;
        },

        // Resolver for saving an inmate
        saveInmate: async (parent, { inmateInfo }, context) => {
            const updateUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedInmates: inmateInfo } },
                { new: true }
            );

            return updateUser;
        },

        // Resolver for removing an inmate
        removeInmate: async (parent, { _id }, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedInmates: { _id } } },
                    { new: true }
                );

                return updateUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        
    },
};

module.exports = resolvers;
