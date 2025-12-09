export const getEventById = (events, id) => {
    const eventId = parseInt(id);
    return events.find((event) => event.id === eventId);
};

export const changeEventById = (events, eventId, updatedEvent) => {
    for (let i = 0; i < events.length; i++) {
        if (events[i].id === eventId) {
            events[i] = updatedEvent;
            break;
        }
    }

    return events;
};
