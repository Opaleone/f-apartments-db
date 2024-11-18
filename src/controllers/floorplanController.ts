import { Request, Response } from "express";
import { Floorplan } from "../models";

const createFloorplan = async (req: Request, res: Response) => {
  try {
    const floorplan = await Floorplan.create(req.body);

    if (!floorplan) res.status(404).json({ message: 'No body found!'});

    res.status(200).send(floorplan);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const deleteFloorplan = async (req: Request, res: Response) => {
  try {
    const deletedFloorplan = await Floorplan.findOneAndDelete({
      _id: req.params.id
    })

    if (!deletedFloorplan) res.status(404).json({ message: `Floorplan with id ${req.params.id} not found!`})

    res.status(200).json({ message: `Floorplan with id ${req.params.id} deleted successfully!`})
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export { createFloorplan, deleteFloorplan };