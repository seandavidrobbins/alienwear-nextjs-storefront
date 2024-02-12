import { gql } from "@apollo/client";

/**
 * GraphQL menus query.
 */
const GET_MENUS_QUERY = gql`
  query {
    acfOptionsMainMenu {
      mainMenu {
        menuItems {
          menuItem {
            destination {
              ... on Page {
                uri
              }
            }
            label
          }
          items {
            destination {
              ... on Page {
                uri
              }
            }
            label
          }
        }
      }
    }
  }
`;

export default GET_MENUS_QUERY;
