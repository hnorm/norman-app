/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactFormInput = {
  id?: string | null,
  name: string,
  email: string,
  message: string,
};

export type ModelContactFormConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactFormConditionInput | null > | null,
  or?: Array< ModelContactFormConditionInput | null > | null,
  not?: ModelContactFormConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ContactForm = {
  __typename: "ContactForm",
  id: string,
  name: string,
  email: string,
  message: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContactFormInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  message?: string | null,
};

export type DeleteContactFormInput = {
  id: string,
};

export type ModelContactFormFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactFormFilterInput | null > | null,
  or?: Array< ModelContactFormFilterInput | null > | null,
  not?: ModelContactFormFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelContactFormConnection = {
  __typename: "ModelContactFormConnection",
  items:  Array<ContactForm | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionContactFormFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContactFormFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactFormFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateContactFormMutationVariables = {
  input: CreateContactFormInput,
  condition?: ModelContactFormConditionInput | null,
};

export type CreateContactFormMutation = {
  createContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactFormMutationVariables = {
  input: UpdateContactFormInput,
  condition?: ModelContactFormConditionInput | null,
};

export type UpdateContactFormMutation = {
  updateContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactFormMutationVariables = {
  input: DeleteContactFormInput,
  condition?: ModelContactFormConditionInput | null,
};

export type DeleteContactFormMutation = {
  deleteContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContactFormQueryVariables = {
  id: string,
};

export type GetContactFormQuery = {
  getContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactFormsQueryVariables = {
  filter?: ModelContactFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactFormsQuery = {
  listContactForms?:  {
    __typename: "ModelContactFormConnection",
    items:  Array< {
      __typename: "ContactForm",
      id: string,
      name: string,
      email: string,
      message: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactFormSubscriptionVariables = {
  filter?: ModelSubscriptionContactFormFilterInput | null,
};

export type OnCreateContactFormSubscription = {
  onCreateContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactFormSubscriptionVariables = {
  filter?: ModelSubscriptionContactFormFilterInput | null,
};

export type OnUpdateContactFormSubscription = {
  onUpdateContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactFormSubscriptionVariables = {
  filter?: ModelSubscriptionContactFormFilterInput | null,
};

export type OnDeleteContactFormSubscription = {
  onDeleteContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
