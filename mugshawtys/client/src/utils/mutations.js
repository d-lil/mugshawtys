import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                email
                password
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $age: String!, $gender: String!) {
        addUser(username: $username, email: $email, password: $password, age: $age, gender: $gender ) {
            token
            user {
                username
                email
                password
                age
                gender
            }
        }
        }

`;

export const UPDATE_USER = gql`
    mutation updateUser($preferences: String, $about: String) {
        updateUser(image: $image, preferences: $preferences, about: $about) {
            image
            preferences
            about
        }
    }
`;

export const SAVE_INMATE = gql`
    mutation saveInmate($inmateInfo: InmateInput) {
        saveInmate(inmateInfo: $inmateInfo) {
            savedInmates {
                inmateId
                inmateName
                inmateImage
                inmateAge
                inmateGender
                inmateAbout
            }
        }
    }
`;

export const REMOVE_INMATE = gql`
    mutation removeInmate($inmateId: ID!) {
        removeInmate(inmateId: $inmateId) {
            _id
            username
            email
            savedInmates {
                inmateId
                inmateName
                inmateImage
                inmateAge
                inmateGender
                inmateAbout
            }
        }
    }
`;

