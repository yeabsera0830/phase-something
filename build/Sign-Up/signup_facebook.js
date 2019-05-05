var axios = require('axios')

function rand() {
    return Math.random().toString(36).substr(2)
}

async function signupFacebook(token) {
    var respond = null
    await axios.get(`http://localhost:9090/facebook/${token}`)
                    .then(async info => {
                        await axios.post('http://localhost:9091/zelia/signup', 
                            {
                                fbID: info.data.id,
                                name: info.data.name,
                                email: info.data.email,
                                profile_pic: info.data.profile_pic,
                                zelia_token: rand() + rand(),
                                password: null,
                                reviews: [],
                                friends: []
                            }
                        )
                        .then(response =>  {
                            respond = {
                                'type': 'success',
                                'value': response.data.zelia_token
                            }
                        })
                    })
                    .catch(error => {
                        respond =  {
                            'type': 'failure',
                            'message': 'Invalid token'
                        }
                    })
    return respond
}

module.exports = signupFacebook
