import express from "express";
import { SensorController } from "../controllers/sensors";

const sensorController = new SensorController();
const sensorsRouter = express.Router();
sensorsRouter.get('/', sensorController.getAllSensors);
sensorsRouter.get('/:id', sensorController.getSensorById);
sensorsRouter.post('/', sensorController.addSensor);
sensorsRouter.delete('/:id', sensorController.deleteSensorById);
sensorsRouter.put('/:id', sensorController.modifySensorById);

export default sensorsRouter;