import { WebhookPayload, VerifyPayload } from './webhook.interface';

export const verify = (payload: VerifyPayload) => {
    return payload['hub.mode'] === 'subscribe' &&
        payload['hub.verify_token'] === process.env.WEBHOOK_TOKEN
        ? payload['hub.challenge']
        : null;
};

export const webhook = (event: WebhookPayload) => {
    event.entry.forEach((entry) => {
        console.log('changes', JSON.stringify(entry.changes));
    });
};
