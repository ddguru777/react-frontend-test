export default {
  'development-local-stag': {
    SITE_URL: 'https://www.nytimes.com',
    API_URL: 'https://api.nytimes.com/svc/search/v2',
    API_KEY: 'P3Le4InaLwGeg1MqfikHsxWsWq7kfDmo',
  },
  get 'production-local-stag'() {
    return this['development-local-stag'];
  },
  get 'test-local-stag'() {
    return this['development-local-stag'];
  },
};
