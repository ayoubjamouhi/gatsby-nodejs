import Contact from '../models/Contact.js';

export async function postContact(req, res) {
  const create = await new Contact(req.body).save();
  require('../functions/response').checkRes(res, create);
}

export async function getAllContacts(req, res) {
  const all = await Contact.find({});
  require('../functions/response').checkRes(res, all);
}

export async function getById(req, res) {
  const all = await Contact.findOne({ _id: req.params.id });
  require('../functions/response').checkRes(res, all);
}

export async function putById(req, res) {
  const update = await Contact.updateOne({
    _id: req.body.id,
    name: req.body.name,
    age: req.body.age,
  });
  if (update.ok === 1) res.json('ok');
}
