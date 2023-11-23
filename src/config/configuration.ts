export default () => ({
    database: {
        uri: process.env.DATABASE_URI,
        options: {
            dbName: process.env.DATABASE_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    auth: {
        uri: process.env.AUTH_URI,
        clientId: 'game-server',
        clientSecret: 'gameserver@20luminet&',
        audiences: ['api', 'admin-api', 'game-services'],
    },
    sentry: {
        dns: process.env.SENTRY_DNS,
        release: process.env.SENTRY_RELEASE,
        env: process.env.ENV,
        logIdentifier: 'game-management-service',
    },
    systemName: process.env.SYSTEM_TYPE,
});
