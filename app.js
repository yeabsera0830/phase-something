var express = require('express')
var app = express()

// Sign Up
const signupPhone = require('./build/Sign-Up/signup_phone')
const signupFacebook = require('./build/Sign-Up/signup_facebook')

// Log In
const loginPhone = require('./build/Login/login_phone')
const loginFacebook = require('./build/Login/login_facebook')

// Profiles
const getName = require('./build/Profile/name')
const getEmail = require('./build/Profile/email')
const getPhone = require('./build/Profile/phone')
const getProfilePic = require('./build/Profile/profile_pic')
const getFriends = require('./build/Profile/friends')
const getReviews = require('./build/Profile/reviews')


// Settings
const changeName = require('./build/Settings/changeName')
const changeEmail = require('./build/Settings/changeEmail')
const changePassword = require('./build/Settings/changePassword')
const changePhone = require('./build/Settings/changePhone')
const changeProfilePicture = require('./build/Settings/changeProfilePicture')

app.use(express.json())
app.listen(8081, () => console.log("Listening on *:8081"))


// Sign up using phone
app.post('/zelia/signup', async (req, res) => {
    const phone = req.body.phone
    const password = req.body.password
    const response = await signupPhone(phone, password)
    res.send(response)
})

// Sign up using Facebook
app.post('/zelia/signup/facebook', async (req, res) => {
    const token = req.body.token
    const response = await signupFacebook(token)
    res.send(response)
})

// Login using phone
app.post('/zelia/login/phone', async (req, res) => {
    const phone = req.body.phone
    const password = req.body.password
    const response = await loginPhone(phone, password)
    res.send(response)
})

// Login using Facebook
app.post('/zelia/login/facebook', async (req, res) => {
    const token = req.body.token
    const response = await loginFacebook(token)
    res.send(response)
})

// Profiles Section
app.get('/name', async (req, res) => {
    const token = req.body.token
    const response = await getName(token)
    res.send(response)
})

app.get('/email', async (req, res) => {
    const token = req.body.token
    const response = await getEmail(token)
    res.send(response)
})

app.get('/phone', async (req, res) => {
    const token = req.body.token
    const response = await getPhone(token)
    res.send(response)
})

app.get('/profile_pic', async (req, res) => {
    const token = req.body.token
    const response = await getProfilePic(token)
    res.send(response)
})

app.get('/friends', async (req, res) => {
    const token = req.body.token
    const response = await getFriends(token)
    res.send(response)
})

app.get('/reviews', async (req, res) => {
    const token = req.body.token
    const response = await getReviews(token)
    res.send(response)
})

// Settings Section
app.put('/change/name', async (req, res) => {
    const token = req.body.token
    const new_name = req.body.new_name
    const response = await changeName(token, new_name)
    res.send(response)
})

app.put('/change/email', async (req, res) => {
    const token = req.body.token
    const new_email = req.body.new_email
    const response = await changeEmail(token, new_email)
    res.send(response)
})

app.put('/change/phone', async (req, res) => {
    const token = req.body.token
    const new_phone = req.body.new_phone
    const response = await changePhone(token, new_phone)
    res.send(response)
})

app.put('/change/password', async (req, res) => {
    const token = req.body.token
    const new_password = req.body.new_password
    const response = await changePassword(token, new_password)
    res.send(response)
})

app.put('/change/profile-picture', async (req, res) => {
    const token = req.body.token
    const new_profile_picture = req.body.new_profile_picture
    const response = await changeProfilePicture(token, new_profile_picture)
    res.send(response)
})