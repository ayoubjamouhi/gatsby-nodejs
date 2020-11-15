const Contact = require('../models/Contact');

exports.postContact =  async (req,res) => {
  const create = await new Contact(req.body).save();
  require('../functions/response').checkRes(res,create);
}

exports.getAllContacts =  async (req,res) => {
  const all = await Contact.find({});
  require('../functions/response').checkRes(res,all);
}
exports.getById =  async (req,res) => {
  const all = await Contact.findOne({_id: req.params.id });
  require('../functions/response').checkRes(res,all);
}