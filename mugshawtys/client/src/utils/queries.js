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
                inmateId
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

export const QUERY_SINGLE_INMATE = gql`
    query inmate($inmateId: ID!) {
        inmate(inmateId: $inmateId) {
            inmateId
            inmateName
            inmateImage
            inmateGender
            inmateAge
            inmateAbout
        }
    }
`;


export const QUERY_INMATES = gql`
    query inmates {
        inmates {
            inmateId
            inmateName
            inmateImage
            inmateGender
            inmateAge
            inmateAbout
        }
    }
`;

