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
                name
                image
            }
        }
    },
`;

export const QUERY_INMATES = gql`
    query inmates {
        inmates {
            _id
            username
            image
            gender
            age
            about
        }
    }
`;

