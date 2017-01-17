var Config = Config || {};

Config['env'] = 'development';

Config['db'] = {
    development: {
        database: 'cuneyt',
        username: 'cuneyt',
        password: '',
        host: '127.0.0.1',
        dialect: 'postgres'
    },
    stage: {},
    production: {}
};

Config['orm'] = {
    timestamps: false,
    paranoid: false,
    underscore: true
};

module.exports = Config;
