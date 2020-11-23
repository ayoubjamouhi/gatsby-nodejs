exports.checkRes = (res,object) => {
  console.log(object);
  if(object != null)
    return res.json(object);
  return res.json('Not found');
}