const CustomWorld = require('./utils/world');

module.exports = {
    default: {
        require: [
            'step_definitions/*.js',
            'utils/world.js',
            'utils/hooks.js',
            'features'
        ],
        format: ['progress', 'json:results/cucumber_report.json']
    }
}