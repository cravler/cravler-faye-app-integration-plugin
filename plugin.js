//
module.exports = function() {

    if (!process.env.FAYE_EXT_SECURITY_CHECK_URL) {
        var url = process.env.FAYE_INTEGRATION_URL || 'http://127.0.0.1';
        url += '/' + (process.env.FAYE_INTEGRATION_ROUTE_PREFIX || 'faye-app');
        process.env.FAYE_EXT_SECURITY_CHECK_URL = url + '/security';
    }

    return {
        extensions: [
            'faye-app/extensions/security-check'
        ]
    };
}();
