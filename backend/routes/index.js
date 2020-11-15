const  express = require('express');
const  ContactControllers  = require('../controllers/ContactControllers');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hello World!');
})

router.get('/contacts', ContactControllers.getAllContacts)
router.get('/contacts/:id', ContactControllers.getById)
router.post('/contact', ContactControllers.postContact)

module.exports = router;