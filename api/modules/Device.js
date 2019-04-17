const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }

    }
);

const Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;