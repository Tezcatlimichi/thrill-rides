const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
//create ride
router.post('/rides', controllers.createRide)
//get all rides
router.get('/rides', controllers.getAllRides)
//get one ride
router.get('/rides/:id', controllers.getRide)
//update ride
router.put('/rides/:id', controllers.updateRide)
// delete ride
router.delete('/rides/:id', controllers.deleteRide)

//// tickets crud

//create ticket
router.post('/tickets', controllers.createTicket)
//read all tickets
router.get('/tickets', controllers.getAllTickets)
//read single ticket
router.get('/tickets/:id', controllers.getTicket)
//update tickett
router.put('/tickets/:id', controllers.updateTicket)
//delete ticket
router.delete('/tickets/:id', controllers.deleteTicket)

module.exports = router
