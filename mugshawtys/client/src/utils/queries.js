import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            preferences
            about
            savedInmates {
                inmateId
                name
                image
            }
        }
    },
`;
