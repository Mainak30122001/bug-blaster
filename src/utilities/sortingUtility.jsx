import React from 'react'

const sortTickets = (tickets, sortPreference) => {
    // Implementation for sorting tickets based on sortPreference
    switch (sortPreference) {
        case 'High to Low':
            return [...tickets].sort((a, b) => b.priority.localeCompare(a.priority));
        // this line also sorts the tickets in descending order based on the priority property, but it uses the localeCompare method to compare the priority values as strings. This is useful if the priority values are strings rather than numbers, ensuring that the sorting respects locale-specific rules for string comparison.

        // return [...tickets].sort((a, b) => b.priority - a.priority);
        // This line creates a new array by spreading the tickets array and then sorts it in descending order based on the priority property of each ticket. The sort function compares the priority of two tickets (a and b) and arranges them accordingly. Tickets with higher priority values will appear before those with lower values in the sorted array.
        case 'Low to High':
            return [...tickets].sort((a, b) => a.priority.localeCompare(b.priority));
        // this line sorts the tickets in ascending order based on the priority property, using the localeCompare method to compare the priority values as strings. This ensures that the sorting respects locale-specific rules for string comparison.

        //return [...tickets].sort((a, b) => a.priority - b.priority);
        // This line creates a new array by spreading the tickets array and then sorts it in ascending order based on the priority property of each ticket. The sort function compares the priority of two tickets (a and b) and arranges them accordingly. Tickets with lower priority values will appear before those with higher values in the sorted array.
        default:
            return tickets;
    }
}

export default sortTickets