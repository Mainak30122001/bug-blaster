//why we use reducer function?
// A reducer function is used to manage the state of an application in a predictable way. It takes the current state and an action as arguments, and returns a new state based on the action type. This allows for a clear and organized way to handle state changes, especially in complex applications where multiple components may need to update the same state. By using a reducer, we can ensure that state updates are handled consistently and immutably, making it easier to track changes and debug issues.
// in hindi: reducer function ka use application ke state ko ek predictable tareeke se manage karne ke liye kiya jata hai. Ye current state aur ek action ko arguments ke roop mein leta hai, aur action type ke adhar par ek nayi state return karta hai. Isse state changes ko clear aur organized tareeke se handle karna possible hota hai, khaaskar complex applications mein jahan multiple components ko same state update karne ki zarurat hoti hai. Reducer ka use karke, hum ensure kar sakte hain ki state updates consistently aur immutably handle kiye ja rahe hain, jo changes ko track karna aur issues ko debug karna aasaan banata hai.

export default function ticketReducer(state, action) {

    switch (action.type) {
        case 'ADD_TICKET':
            return { ...state, tickets: [...state.tickets, action.payload] };
        // In nursery kid understandable language, this line is saying: "Take the current state of the application, and create a new state where the tickets array includes all the existing tickets plus the new ticket that was just added." The spread operator (...) is used to copy the existing tickets into a new array, and then the new ticket (action.payload) is added to that array. This ensures that the state is updated immutably, meaning that we are not directly modifying the existing state but instead creating a new version of it with the added ticket. 
        // kyunki yeh line hamesha ek nayi state return karegi, jismein purane tickets ke saath naya ticket bhi shamil hoga. Isse application ka state hamesha updated rahega aur purane tickets bhi safe rahenge.

        // just remember, in one sentence take copy of state and just manage the state in case of change that is the main purpose of reducer function. It is like a manager who manages the state of the application and make sure that state is updated in a predictable way.
        case 'UPDATE_TICKET':
            return {
                ...state,
                tickets: state.tickets.map(ticket =>
                    ticket.id === action.payload.id ? action.payload : ticket
                ),
                editingTicket: null
            }
        // In simple words, this line is saying: "Take the current state of the application, and create a new state where the tickets array is updated. For each ticket in the existing tickets array, check if its id matches the id of the ticket that needs to be updated (action.payload.id). If it matches, replace that ticket with the updated ticket (action.payload). If it doesn't match, keep the original ticket as it is." This ensures that only the specific ticket that needs to be updated is changed, while all other tickets remain unchanged. The map function is used to iterate over the tickets array and create a new array with the updated ticket included.
        // kyunki yeh line hamesha ek nayi state return karegi, jismein sirf wahi ticket update hoga jiska id match karega, aur baaki tickets waise ke waise rahenge. Isse application ka state hamesha updated rahega aur purane tickets bhi safe rahenge.

        case 'DELETE_TICKET':
            if (state.editingTicket && state.editingTicket.id === action.payload.id) {
                return {
                    ...state,
                    tickets: state.tickets.filter(ticket => ticket.id !== action.payload.id),
                    editingTicket: null
                }
            } else {
                return {
                    ...state,
                    tickets: state.tickets.filter(ticket => ticket.id !== action.payload.id),
                }
            }
        case 'SET_EDITING_TICKET':
            return {
                ...state,
                editingTicket: action.payload
            }

        case 'CLEAR_EDITING_TICKET':
            return {
                ...state,
                editingTicket: null
            }

        case 'SET_SORTING':
            return {
                ...state,
                sortPreference: action.payload.sortPreference
            }
        default:
            return state;
    }
}