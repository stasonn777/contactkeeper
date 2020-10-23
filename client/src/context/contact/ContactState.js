import React, { useReducer } from 'react'
import uuid from 'uuid'
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Stas Lakhman',
        email: 'test@test.gmail',
        phone: '222-22-22',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Kos Lakhman',
        email: 'test1@test.gmail',
        phone: '222-22-22',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Jul Lakhman',
        email: 'test2@test.gmail',
        phone: '333-22-22',
        type: 'personal',
      },
    ],
  }
  const [state, dispatch] = useReducer(contactReducer, initialState)

  //Add contact

  //Delete contact

  //Set current contact

  //Clear current contact

  //Update contact

  //Filter contacts

  //Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}>
      {props.children}
    </contactContext.Provider>
  )
}

export default ContactState
