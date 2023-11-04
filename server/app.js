import express from 'express';
import nodemailer from 'nodemailer'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


function sendEmail({email, userName, message}) {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'test.acount.pokelab',
                pass: 'clbu iybd bmab wlzr'
            }
        })
        const mailOptions = {
            from: email,
            to: 'test.acount.pokelab@gmail.com',
            subject: `Wiadomosc od użytkownika ${userName}`,
            text: message,
            
        }
        transporter.sendMail(mailOptions, function(error, info) {
            if(error) {
                console.error('Error: ', error)
                return reject({message: 'An error has occured'})
            } else {
                console.log('Email Sent: ', info.response)
                return resolve ({message: 'Email sent succesfuly'})
            }
        })
    })    
}

app.use(cors())

app.get('/', (req, res) => {
    sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message))
})

app.post('/send_email', (req, res) => {
    sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message))
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})