import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({ 
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload.contact);
            },
            prepare(contact) {
                return {
                    payload: {
                        id: nanoid(),
                        contact,
                    }
                }
            }
        }, 
        deleteContact(state, action) {
            const deleteNumber = state.items.findIndex(
                (contact) => contact.id === action.payload
            );
            state.items.splice(deleteNumber, 1);
        },
    },
    });

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
export const contactList = (state) => state.contacts.items;