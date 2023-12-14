const express = require('express')
const router = express.Router()

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
]

const sampleArr = ['1', '2', '3']

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Mini Messageboard',
		messages: messages,
	})
})

/* GET form page. */
router.get('/new', function (req, res, next) {
	res.render('form')
})

/* POST form info. */
router.post('/new', function (req, res, next) {
	const newMessage = {
		text: req.body.text,
		user: req.body.user,
		added: new Date(),
	}

	messages.push(newMessage)
	res.redirect('/')
})

module.exports = router
