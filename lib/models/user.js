const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number},
    email: {type: String},
    phone: {type: String},
    created: {type: Date, default: Date.now}
});


UserSchema.statics.create = function(params) {
    const {
        name,
        age,
        email,
        phone
    } = params;

    const user = {name, age, email, phone};

    const result = this({...user}).save();

    return result;
}


UserSchema.statics.get = function() {
    
}
UserSchema.statics.udpate = function() {
    
}
UserSchema.statics.delete = function() {
    
}

mongoose.model('user', UserSchema);

module.exports = UserSchema;