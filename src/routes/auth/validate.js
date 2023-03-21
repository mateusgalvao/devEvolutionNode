const passport = require('../../auth/passport');

function validate() {
    return passport.authenticate('jwt', {session: false});
}

module.exports = validate;