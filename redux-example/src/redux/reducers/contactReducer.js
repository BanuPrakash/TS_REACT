export default function contactReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return [...state, {...action.payload}];
        case 'REMOVE_CONTACT':
            return state.filter(contact => contact.email !== action.payload)
        case 'CLEAR_CONTACT':
            return [];
        default:
            return state;
    }
}