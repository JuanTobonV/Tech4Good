const experss = require('express');
const router = experss.Router(); // router
//const service = require('../services/donacion.service')

// rutas
router.get('/',async (req,res) =>{
  try {
    res.json('get');
  } catch (error) {
  }
})
router.post('/',async (req,res) =>{
  try {
    res.json('post');
  } catch (error) {
  }
})
router.patch('/:id',async (req,res) =>{
  try {
    res.json('patch');
  } catch (error) {
  }
})
router.delete('/:id',async (req,res) =>{
  try {
    res.json('delete');
  } catch (error) {
  }
})

module.exports = router;
