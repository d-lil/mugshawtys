const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id}).populate('savedInmates');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        inmates: async (parent, args, context) => {
            return User.find();
        },
        },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

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
       
        updateUser: async (parent, args, context) => {
            const user = await User.findOneAndUpdate(
                { _id: context.user._id },
                args,
                { new: true }
            );

            return user;
        },

        saveInmate: async (parent, { input }, context) => {
            const updateUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedInmates: input } },
                { new: true }
            );

            return updateUser;
        },

        removeInmate: async (parent, { inmateId }, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedInmates: { inmateId } } },
                    { new: true }
                );

                return updateUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;