/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContactForm = /* GraphQL */ `subscription OnCreateContactForm(
  $filter: ModelSubscriptionContactFormFilterInput
) {
  onCreateContactForm(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContactFormSubscriptionVariables,
  APITypes.OnCreateContactFormSubscription
>;
export const onUpdateContactForm = /* GraphQL */ `subscription OnUpdateContactForm(
  $filter: ModelSubscriptionContactFormFilterInput
) {
  onUpdateContactForm(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContactFormSubscriptionVariables,
  APITypes.OnUpdateContactFormSubscription
>;
export const onDeleteContactForm = /* GraphQL */ `subscription OnDeleteContactForm(
  $filter: ModelSubscriptionContactFormFilterInput
) {
  onDeleteContactForm(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContactFormSubscriptionVariables,
  APITypes.OnDeleteContactFormSubscription
>;
