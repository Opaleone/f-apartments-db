import { Request, Response } from 'express';
import { Average } from '../models/index';

const createAverages = async (req: Request, res: Response) => {
  try {
    const averages = await Average.create(req.body);

    if (!averages) res.status(404).json({ message: 'No body found!'});

    res.status(200).send(averages);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const deleteAverages = async (req: Request, res: Response) => {
  try {
    const deletedAverages = await Average.findOneAndDelete({
      _id: req.params.id
    })

    if (!deletedAverages) res.status(404).json({ message: `Averages with id ${req.params.id} not found!`})

    res.status(200).json({ message: `Averages with id ${req.params.id} deleted successfully!`})
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export { createAverages, deleteAverages }