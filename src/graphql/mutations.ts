/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createContactForm = /* GraphQL */ `mutation CreateContactForm(
  $input: CreateContactFormInput!
  $condition: ModelContactFormConditionInput
) {
  createContactForm(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactFormMutationVariables,
  APITypes.CreateContactFormMutation
>;
export const updateContactForm = /* GraphQL */ `mutation UpdateContactForm(
  $input: UpdateContactFormInput!
  $condition: ModelContactFormConditionInput
) {
  updateContactForm(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactFormMutationVariables,
  APITypes.UpdateContactFormMutation
>;
export const deleteContactForm = /* GraphQL */ `mutation DeleteContactForm(
  $input: DeleteContactFormInput!
  $condition: ModelContactFormConditionInput
) {
  deleteContactForm(input: $input, condition: $condition) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactFormMutationVariables,
  APITypes.DeleteContactFormMutation
>;
