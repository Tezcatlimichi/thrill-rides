const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/rides', controllers.createRide)

router.get('/rides', controllers.getAllRides)

router.get('/rides/:id', controllers.getRide)

router.delete('/rides/:id', controllers.deleteRide)

router.post('/tickets', controllers.createTicket)

router.get('/tickets', controllers.getAllTickets)

router.delete('/tickets/:id', controllers.deleteTicket)

router.get('tickets/:id', controllers.getTicket)

module.exports = router
