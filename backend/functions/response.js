exports.checkRes = (res,object) => {
  if(object != null)
    return res.json(object);
  return JSON.parse('Not found');
}