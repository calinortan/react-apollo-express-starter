import { gql } from "@apollo/client";

export const GET_USERS_WITH_COMPANY = gql`
  query getUsersWithCompany {
    user {
      id
      name
      company {
        name
      }
    }
  }
`;
