const { getEventById, changeEventById } = require("../controllers/events");
const express = require("express");
const router = express.Router();

let events = [
    {
        id: 1,
        title: "Test in math class",
        description: "Prepare in matrix multiplication",
        date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    },
    {
        id: 2,
        title: "Test in physics class",
        description: "Remember second Newton's law",
        date: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
    },
    {
        id: 3,
        title: "Second test in math class",
        description: "Prepare in matrix division",
        date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    },
];

router.get("/", (req, res) => {
    if (req.query.title) {
        filteredEvents = events.filter((event) =>
            event.title.includes(req.query.title)
        );
        res.status(200).json(filteredEvents);
        return;
    }
    res.status(200).json(events);
});

router.get("/:id", (req, res) => {
    const event = getEventById(events, req.params.id);

    if (event) {
        res.json(event);
    } else {
        res.status(404).json({ error: "Событие не найдено" });
    }
});

router.post("/", (req, res) => {
    const event = req.body;
    events.push(event);
    res.status(201).end();
});

router.put("/:id", (req, res) => {
    const eventId = parseInt(req.params.id);
    const updatedEvent = req.body;

    events = changeEventById(events, eventId, updatedEvent);
    res.status(202).end();
});

router.delete("/:id", (req, res) => {
    const index = events.findIndex(
        (event) => event.id === parseInt(req.params.id)
    );

    if (index !== -1) {
        events.splice(index, 1);
        res.status(204).end();
        return;
    }

    res.status(404).end();
});

module.exports = router;
