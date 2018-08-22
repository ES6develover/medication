module.exports = {
    Constants: require('./constants/constants.js'),
    Util: require('./lib/util.js'),
    SimplePubSubHub: require('./lib/simple-pubsub-hub.js'),
    Validators: require('./lib/validators.js'),
    Schema: {
        Pathway: require('./schema/cs-pw-pathway-template.schema.js'),
        Schedule: require('./schema/cs-pw-schedule.schema.js'),
        Event: require('./schema/cs-pw-event.schema.js'),
        other: require('./schema/cs-pw-other.schema.js')
    },
    Picklists: require('./data/default-pickers')
}