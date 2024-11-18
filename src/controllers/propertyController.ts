import { Request, Response } from 'express';
import { Property } from '../models/index';

const getOneProperty = async (req: Request, res: Response) => {
  try {
    const singleProperty = await Property.findOne({ 
      propertyName: req.params.propertyName,
    })

    if (!singleProperty) res.status(404).json({ message: `${req.params.propertyName} not found.`})

    res.status(200).send(singleProperty);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const createProperty = async (req: Request, res: Response) => {
  try {
    const property = await Property.create(req.body);

    if (!property) res.status(404).json({ message: 'No body found!'});

    res.status(200).send(property);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const deleteProperty = async (req: Request, res: Response) => {
  try {
    const deletedProperty = await Property.findOneAndDelete({
      _id: req.params.id
    })

    if (!deletedProperty) res.status(404).json({ message: `Property with id ${req.params.id} not found!`})

    res.status(200).json({ message: `Property with id ${req.params.id} deleted successfully!`})
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export { getOneProperty, createProperty, deleteProperty };