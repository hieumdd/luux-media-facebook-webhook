import { http } from '@google-cloud/functions-framework';
import express from 'express';

import { WebhookPayload, VerifyPayload } from './webhook/webhook.interface';
import { verify, webhook } from './webhook/webhook.service';

const app = express();

app.get('/', (req, res) => {
    const challenge = verify(req.query as VerifyPayload);

    challenge ? res.status(200).send(challenge) : res.status(403);
});

app.post('/', (req, res) => {
    webhook(req.body as WebhookPayload);

    res.status(200).json({ status: 200 });
});

http('main', app);
