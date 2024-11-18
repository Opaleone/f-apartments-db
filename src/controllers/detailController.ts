import { Request, Response } from 'express';
import { Details } from '../models/index';

const createDetails = async (req: Request, res: Response) => {
  try {
    const details = await Details.create(req.body);

    if (!details) res.status(404).json({ message: 'No body found!'});

    res.status(200).send(details);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const deleteDetails = async (req: Request, res: Response) => {
  try {
    const deletedDetails = await Details.findOneAndDelete({
      _id: req.params.id
    })

    if (!deletedDetails) res.status(404).json({ message: `Details with id ${req.params.id} not found!`})

    res.status(200).json({ message: `Details with id ${req.params.id} deleted successfully!`})
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export { createDetails, deleteDetails};