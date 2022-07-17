import { gql } from '@apollo/client';


export const SEARCH_BUSINESSES_QUERY = gql`
    query SearchBusinesses ($term: String!, $location: String!, $limit: Int!) {
        search(term: $term, location: $location, limit: $limit) {
            business {
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
            }
        }
    }
`;
