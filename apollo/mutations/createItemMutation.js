import { gql } from 'apollo-boost';

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $imageLarge: String
    $price: Int!
  ) {
    createItem(
      title: $title
      description: $description
      image: $image
      imageLarge: $imageLarge
      price: $price
    ) {
      id
    }
  }
`;
