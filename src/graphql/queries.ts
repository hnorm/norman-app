/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getContactForm = /* GraphQL */ `query GetContactForm($id: ID!) {
  getContactForm(id: $id) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContactFormQueryVariables,
  APITypes.GetContactFormQuery
>;
export const listContactForms = /* GraphQL */ `query ListContactForms(
  $filter: ModelContactFormFilterInput
  $limit: Int
  $nextToken: String
) {
  listContactForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactFormsQueryVariables,
  APITypes.ListContactFormsQuery
>;
