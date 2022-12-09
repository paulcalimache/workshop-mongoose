import {Schema, model} from 'mongoose';

const sensorSchema: Schema = new Schema({
    id: Number,
    type: String
}, {versionKey: false});

const sensorModel = model('sensor', sensorSchema);

export default sensorModel;