import { gql } from '@apollo/client';

const BASIC_BUSINESS_QUERY = `
    name
    rating
    id
    price
    categories {
        title
    }
    location {
        address1
        address2
        address3
        city
        state
        postal_code
        country
        formatted_address
    }
    photos
`;

export const buildGetBusinessesFromIDsQuery = ids => {
    return gql`
        query GetBusinessesFromIDs {
            ${ids.map((id, i) => `
                b${i + 1}: business(id: "${id}") {
                    ${BASIC_BUSINESS_QUERY}
                }
            `)}
        }
    `
};
