//place associations here
const User = require('./user');
const Budget = require('./budget');
const GuestList = require('./GuestList');

Budget.belongsTo(User, {
    foreignKey: 'id'
});


GuestList.belongsTo(User, {
    foreignKey: 'id'
});

module.exports = { User, Budget, GuestList }