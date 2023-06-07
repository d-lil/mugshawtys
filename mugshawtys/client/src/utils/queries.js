import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            image
            gender
            age
            preferences
            about
            savedInmates {
                _id
                inmateName
                inmateImage
                inmateAge
                inmateGender
                inmateAbout
            }
        }
    },
`;

export const QUERY_USERS = gql`
    query users {
        users {
            _id
            username
            email
            image
            gender
            age
            about
        }
    }
`;

export const QUERY_INMATES = gql`
    query inmates {
        inmates {
            _id
            name
            image
            gender
            age
            about
        }
    }
`;

