export type VerifyPayload = {
    'hub.challenge': string;
    'hub.mode': string;
    'hub.verify_token': string;
};

export enum InProcessStatus {
    ACTIVE,
    PAUSED,
    DELETED,
    PENDING_REVIEW,
    DISAPPROVED,
    PREAPPROVED,
    PENDING_BILLING_INFO,
    CAMPAIGN_PAUSED,
    ARCHIVED,
    ADSET_PAUSED,
    WITH_ISSUES,
    IN_PROCESS,
}

export type InProcessAdsObjects = {
    field: 'in_process_ad_objects';
    value: {
        id: string;
        level: string;
        status_name: InProcessStatus;
    };
};

export type WithIssuesAdObjects = {
    field: 'with_issues_ad_objects';
    value: {
        id: string;
        level: string;
        error_code: string;
        error_summary: string;
        error_messaging: string;
    };
};

export type Entry = {
    id: string;
    time: number;
    changes: (InProcessAdsObjects | WithIssuesAdObjects)[];
};

export type WebhookPayload = {
    object: 'ad_account';
    entry: Entry[];
};
