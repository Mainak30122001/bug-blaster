// here I describe each and every line of code form App.js to its all imported components and utilities. I will explain the code in simple words so that a nursery kid can understand it easily. I will also explain the code in Hindi for better understanding.

import logo from './logo.svg'; // This line imports the logo image from the specified path. The logo can be used in the application, for example, to display it in the header or any other part of the UI.
// import './App.css';
import './styles.css';
import { useReducer } from 'react'; // The useReducer hook is imported from the React library. It is used to manage complex state logic in a React component. It takes a reducer function and an initial state as arguments, and returns the current state and a dispatch function that can be used to update the state based on actions. This allows for a more organized way to handle state changes, especially when dealing with multiple related state variables or complex state transitions. hindi: useReducer hook ko React library se import kiya gaya hai. Ye ek complex state logic ko manage karne ke liye use hota hai. Ye ek reducer function aur initial state ko arguments ke roop mein leta hai, aur current state aur dispatch function return karta hai jo actions ke adhar par state ko update karne ke liye use hota hai. Isse state changes ko organize tareeke se handle karna possible hota hai, khaaskar jab multiple related state variables ya complex state transitions ke saath deal kar rahe ho.
import TicketForm from './components/TicketFrom' // This line imports the TicketForm component from the specified path. The TicketForm component is responsible for rendering the form that allows users to create or edit tickets. It handles user input for ticket details such as title, description, and priority, and dispatches actions to update the application's state accordingly. 
// In Hindi: Ye line TicketForm component ko specified path se import karti hai. TicketForm component wo form render karta hai jo users ko tickets create ya edit karne ki suvidha deta hai. Ye ticket details jaise title, description, aur priority ke liye user input handle karta hai, aur actions dispatch karta hai taaki application ke state ko accordingly update kiya ja sake.

import ticketReducer from './reducers/ticketReducer' // This line imports the ticketReducer function from the specified path. The ticketReducer is a reducer function that manages the state of tickets in the application. It takes the current state and an action as arguments, and returns a new state based on the action type. The reducer handles various actions such as adding, updating, deleting tickets, and setting the editing ticket or sorting preference. 
// In Hindi: Ye line ticketReducer function ko specified path se import karti hai. ticketReducer ek reducer function hai jo application mein tickets ke state ko manage karta hai. Ye current state aur ek action ko arguments ke roop mein leta hai, aur action type ke adhar par ek nayi state return karta hai. Reducer alag-alag actions handle karta hai jaise tickets add karna, update karna, delete karna, aur editing ticket ya sorting preference set karna.

import TicketList from './components/TicketList' // This line imports the TicketList component from the specified path. The TicketList component is responsible for rendering the list of tickets in the application. It receives the sorted tickets and the dispatch function as props, allowing it to display each ticket and provide functionality for editing or deleting tickets. The component maps over the array of tickets and renders a TicketItem component for each ticket, passing down the necessary data and functions to handle user interactions.
// In Hindi: Ye line TicketList component ko specified path se import karti hai. TicketList component application mein tickets ki list render karta hai. Ye sorted tickets aur dispatch function ko props ke roop mein receive karta hai, jo isse har ticket display karne aur tickets edit ya delete karne ki functionality provide karta hai. Component tickets ke array par map karta hai aur har ticket ke liye ek TicketItem component render karta hai, zaruri data aur functions ko pass karke user interactions handle karne ke liye.
import sortTickets from './utilities/sortingUtility' // This line imports the sortTickets function from the specified path. The sortTickets function is a utility function that sorts an array of tickets based on a given sorting preference. It takes the tickets array and the sortPreference as arguments, and returns a new array of tickets sorted according to the specified preference (either 'High to Low' or 'Low to High'). This function is used in the App component to ensure that the tickets are displayed in the desired order based on user selection.
// In Hindi: Ye line sortTickets function ko specified path se import karti hai. sortTickets function ek utility function hai jo tickets ke array ko diye gaye sorting preference ke adhar par sort karta hai. Ye tickets array aur sortPreference ko arguments ke roop mein leta hai, aur ek nayi array of tickets return karta hai jo specified preference ke adhar par sorted hoti hai (ya to 'High to Low' ya 'Low to High'). Ye function App component mein use hota hai taaki ensure kiya ja sake ki tickets desired order mein display ho rahe hain user selection ke adhar par.

function App() {

  // Define the initial state for the application, which includes an empty array of tickets. This state will be used to manage the list of tickets created through the TicketForm component.
  const initialState = { tickets: [], editingTicket: null, sortPreference: 'High to Low' };


  // basic syntax of useReducer hook is: 
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference); // This line calls the sortTickets function, passing in the current tickets from the state and the sortPreference. The function returns a new array of tickets sorted according to the specified preference (either 'High to Low' or 'Low to High'). The sortedTickets variable holds this sorted array, which can then be used for rendering the ticket list in the UI.

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatchs={dispatch} editingTicket={state.editingTicket} /> {/* here we are passing the dispatch function as a prop to the TicketForm component. This allows the TicketForm to dispatch actions to the ticketReducer, enabling it to add, update, or delete tickets in the application's state. By using dispatch, the TicketForm can communicate with the reducer and trigger state changes based on user interactions, such as submitting a new ticket or modifying an existing one. 
        in Hindi: TicketForm component application mein tickets ki list render karta hai. Ye sorted tickets aur dispatch function ko props ke roop mein receive karta hai, jo isse har ticket display karne aur tickets edit ya delete karne ki functionality provide karta hai. Component tickets ke array par map karta hai aur har ticket ke liye ek TicketItem component render karta hai, zaruri data aur functions ko pass karke user interactions handle karne ke liye. */}


        {/* here we are passing the dispatch function as a prop to the TicketForm component. This allows the TicketForm to dispatch actions to the ticketReducer, enabling it to add, update, or delete tickets in the application's state. By using dispatch, the TicketForm can communicate with the reducer and trigger state changes based on user interactions, such as submitting a new ticket or modifying an existing one. */}
        {/* The TicketList component is responsible for rendering the list of tickets in the application. It receives the sorted tickets and the dispatch function as props, allowing it to display each ticket and provide functionality for editing or deleting tickets. The component maps over the array of tickets and renders a TicketItem component for each ticket, passing down the necessary data and functions to handle user interactions. 
        in Hindi: TicketList component application mein tickets ki list render karta hai. Ye sorted tickets aur dispatch function ko props ke roop mein receive karta hai, jo isse har ticket display karne aur tickets edit ya delete karne ki functionality provide karta hai. Component tickets ke array par map karta hai aur har ticket ke liye ek TicketItem component render karta hai, zaruri data aur functions ko pass karke user interactions handle karne ke liye. */}

        {state.tickets.length > 0 && // This line checks if there are any tickets in the state. If the length of the tickets array is greater than 0, it means there are tickets to display, and the following JSX block will be rendered. If there are no tickets, this block will not be rendered, preventing the display of an empty ticket list.
          // in Hindi: Ye line check karti hai ki state mein koi tickets hain ya nahi. Agar tickets array ka length 0 se zyada hai, iska matlab hai ki display karne ke liye tickets hain, aur following JSX block render hoga. Agar koi tickets nahi hain, ye block render nahi hoga, jisse empty ticket list display hone se bacha ja sake.
          (
            <div className="results">
              <h2>All Tickets</h2>

              {/* The select element allows users to choose their preferred sorting order for the tickets. When the user selects a different option, the onChange event is triggered, which dispatches an action to the reducer with the type 'SET_SORTING' and the selected value as the payload. This updates the sortPreference in the state, causing the component to re-render and display the tickets in the newly selected order. */}
              {/* in Hindi: Select element users ko tickets ke liye unki preferred sorting order choose karne allow karta hai. Jab user kisi alag option ko select karta hai, to onChange event trigger hota hai, jo reducer ko action dispatch karta hai with the type 'SET_SORTING' and the selected value as the payload. Ye sortPreference ko state mein update karta hai, jisse component re-render ho jata hai aur tickets newly selected order mein display ho jate hain. */}

              <select value={state.sortPreference} onChange={(e) => dispatch({ type: 'SET_SORTING', payload: e.target.value })} >
                {/*  
                The value of the select element is bound to the current sortPreference in the state. This ensures that the selected option reflects the current sorting preference, providing a visual indication to the user of the active sorting order.
                
                 in Hindi: Select element ke value ko current sortPreference ke saath bind kiya gaya hai. Isse ensure hota hai ki selected option current sorting preference ko reflect kare, jisse user ko active sorting order ka visual indication milta hai. */}
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>

              <TicketList tickets={sortedTickets} dispatch={dispatch} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App;
