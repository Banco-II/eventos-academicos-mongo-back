const Evento = require("../models/events-model");

const getEvents = async (req, res) => {
  Evento.find({}, { _id: true, __v: false })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((e) => res.status(400).send(e));
};

const getEventsBySearch = async (req, res) => {
  Evento.find(
    { $text: { $search: req.params.content } },
    { _id: true, __v: false }
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((e) => res.status(400).send(e));
};

const createEvent = async (req, res) => {
  Evento.create(req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((e) => res.status(400).send(e));
};

const deleteEvent = async (req, res) => {
  Evento.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.deletedCount > 0) res.status(200).send("Removido com sucesso");
      else res.status(404).send("Anotação não encontrada");
    })
    .catch((e) => res.status(400).send(e));
};

const updateEvent = async (req, res) => {
  await Evento.findById(req.params.id)
    .then((result) => {
      if (result) {
        result.set(req.body);
        result.save();
        res.status(200).send("Atualizado com sucesso");
      }
    })
    .catch((e) => res.status(404).send("Anotação não encontrada"));
};

module.exports = {
  getEvents,
  getEventsBySearch,
  createEvent,
  deleteEvent,
  updateEvent,
};
