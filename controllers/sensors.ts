import { Request, Response } from "express";
import sensorModel from "../database/schema_sensor";
import mongoose from "mongoose";

export class SensorController {

    public getAllSensors(req: Request, res: Response) {
        sensorModel.find((err: mongoose.CallbackError, docs: mongoose.Document) => {
            return err ? res.status(500).send(err) : res.status(200).json({sensors: docs});
        });
    };

    public getSensorById(req: Request, res: Response){
        const sensorId: string = req.params.id;
        sensorModel.findOne({id: sensorId}, (err: mongoose.Error, doc: mongoose.Document) => {
            if (!err) {
                return doc !== null ? res.status(200).json({sensors: doc}) : res.status(404).send('Sensor '+ sensorId + ' not found');
            } else {
                return res.status(500).send(err);
            }
        });
    };
    
    public deleteSensorById(req: Request, res: Response){
        const sensorId: string = req.params.id;
        sensorModel.deleteOne({id: sensorId}, (err: mongoose.Error) => {
            return err ? res.status(500).send(err) : res.status(200).send('Delete successfully !');
        });
    }
    
    public addSensor(req: Request, res: Response) {
        const newSensor = new sensorModel({ id: req.body.id, type: req.body.type});
        newSensor.save((err, doc) => {
            return err ?
                res.status(500).send('Error database') :
                res.status(200).send('Sensor with id : ' + doc.id + ' successfully added !');
        });
    }
    
    public modifySensorById(req: Request, res: Response) {
        const sensorId: string = req.params.id;
        sensorModel.findOneAndUpdate({id: sensorId}, req.body, (err: mongoose.Error) => {
            return err ? res.status(500).send(err) : res.status(200).send('Update successfully !');
        });
    }
}