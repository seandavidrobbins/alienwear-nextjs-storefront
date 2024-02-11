import {gql} from '@apollo/client'

// Query: retrieve preview data by specified identifier.
const queryPreviewById = gql`
  query GET_PREVIEW_BY_ID($id: ID!) {
    contentNode(id: $id, idType: DATABASE_ID) {
      databaseId
      slug
      status
      uri
      contentTypeName
    }
  }
`

export default queryPreviewById
