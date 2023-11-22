const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/serverConfig');
// const {sendBasicEmail} = require('./services/email-service');

const jobs = require('./utils/job');

const TicketController = require('./controller/ticket-controller');


const setupAndStartServer = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);

        jobs();

        // sendBasicEmail(
        //     'support@admin.com',
        //     'www.kumargaurav2112@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // );
        // cron.schedule('*/2 * * * *', () => {
        //     console.log('running a task every two minutes');
        //   });
    });
}

setupAndStartServer();
