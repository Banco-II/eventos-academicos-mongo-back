const { Router } = require("express");
const eventController = require("../controllers/events-controller");

const eventsRouter = Router();

eventsRouter.get("/", eventController.getEvents);
eventsRouter.get("/:content", eventController.getEventsBySearch);
eventsRouter.post("/", eventController.createEvent);
eventsRouter.delete("/:id", eventController.deleteEvent);
eventsRouter.put("/:id", eventController.updateEvent);

module.exports = eventsRouter;
