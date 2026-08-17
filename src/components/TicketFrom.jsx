import React, { useState, useEffect } from 'react';

export default function TicketForm({ dispatchs, editingTicket }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    useEffect(() => {
        if (editingTicket) {
            setTitle(editingTicket.title);
            setDescription(editingTicket.description);
            setPriority(editingTicket.priority);
        } else {
            clearForm();
        }

    }, [editingTicket])

    const priorityLables = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent the default form submission behavior which would cause a page reload

        // Create a ticketData object that contains the title, description, and priority of the ticket. The id is generated using the current date and time in ISO format to ensure uniqueness.

        const ticketData = {
            id: editingTicket ? editingTicket.id : new Date().toISOString(), // generates a unique ID based on the current date and time in ISO format. This ensures that each ticket has a unique identifier.example: "2023-08-15T12:34:56.789Z"
            // If editingTicket exists, it means we are updating an existing ticket, so we use its id. Otherwise, we generate a new id for a new ticket.
            title,
            description,
            priority
        };

        dispatchs({ type: editingTicket ? 'UPDATE_TICKET' : 'ADD_TICKET', payload: ticketData }); // dispatches an action to the reducer with the type 'ADD_TICKET' or 'UPDATE_TICKET' and the ticketData as the payload. This action will be handled by the ticketReducer to add the new ticket or update the existing one in the application's state.

        console.log(ticketData); // logs the ticketData object to the console for debugging purposes. This allows developers to see the current state of the ticket data when the form is submitted.

        clearForm();
    };

    const handleCancelEdit = () => {
        dispatchs({ type: 'CLEAR_EDITING_TICKET' }); // dispatches an action to the reducer with the type 'CLEAR_EDITING_TICKET'. This action will be handled by the ticketReducer to clear the editingTicket state in the application's state, effectively canceling the edit operation.
        clearForm();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="ticket-form">
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        className="form-input"
                        onChange={
                            (e) => setTitle(e.target.value)
                        }
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        type="text"
                        value={description}
                        className="form-input"
                        onChange={
                            (e) => setDescription(e.target.value)
                        }
                    />
                </div>
                <fieldset className="priority-fieldset">
                    <legend>Priority</legend>
                    {
                        Object.entries(priorityLables).map(([value, label]) => ( // Using Object.entries to iterate over the priorityLables object and create radio buttons for each priority level.In simple words, it take the key-value pairs from the priorityLables object and transforms them into an array of [key, value] pairs. Then, the map function is used to iterate over this array and generate a radio button for each priority level.
                            <label key={value} className='priority-label'>
                                <input
                                    type="radio"// this line specifies that the input element is a radio button, allowing users to select one option from a group of choices.
                                    value={value}  // here value is the key from the priorityLables object, which represents the priority level (1, 2, or 3). This value will be sent to the server or used in the application when the form is submitted.
                                    checked={priority === value}    // this line checks whether the current priority state matches the value of the radio button. If they match, the radio button will be selected (checked). This ensures that the correct priority level is displayed as selected based on the user's choice.
                                    className="priority-input"
                                    onChange={
                                        (e) => setPriority(e.target.value)
                                        // here e.target means this input element. So, e.target.value is the value of this input element. When the user selects a different priority level, this onChange event handler updates the priority state with the new value, allowing the application to keep track of the selected priority level.
                                    }
                                />
                                {label}
                            </label>
                        ))
                    }
                </fieldset>
                <button type="submit" className="button">Submit</button>
                {editingTicket && (
                    <button type="button" className="button" onClick={handleCancelEdit}>
                        Cancel Edit
                    </button>
                )}
            </form>
        </>
    )
}