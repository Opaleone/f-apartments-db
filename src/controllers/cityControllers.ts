import { Request, Response } from "express";
import { City, Detail } from "../models";

const getAllCities = async (req: Request, res: Response) => {
  try {
    const allCities = await City.find();

    if (!allCities) res.status(404).json({ message: 'No cities found!'})

    res.status(200).json(allCities);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const checkExist = async (req: Request, res: Response) => {
  try {
    const foundCity = await City.exists({
      cityName: req.query.cityName,
      state: req.query.state
    })

    if (foundCity) {
      const city = await City.findOne({ 
        _id: foundCity._id
      }).populate({
        path: 'properties',
        populate: {
          path: 'floorplans',
          populate: [
            { path: 'details' },
            { path: 'averages'}
          ]
        }
      });

      if (city) {
        if (city?.refresh > Date.now()) {
          res.status(200).send(city);
          return;
        }

        //else {
        //   await City.findOneAndDelete({
        //     _id: city.id
        //   })
        //   res.status(200).send(undefined);
        //   return;
        // }
      }
    }

    res.status(200).send(undefined);
  } catch (e) {
    console.log('Full URL:', req.originalUrl);
    console.log(e);
    res.status(500).send(e);
  }
}

const getOneCity = async (req: Request, res: Response) => {
  const cityName = req.params.cityName;
  const state = req.params.state;

  try {
    const singleCity = await City.findOne({ 
      cityName: cityName,
      state: state
    }).populate({
      path: 'properties',
      populate: {
        path: 'floorplans',
        populate: [
          { path: 'details' },
          { path: 'averages'}
        ]
      }
    });

    if (!singleCity) res.status(404).send({ message: `No city found for ${cityName}, ${state}`});

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(singleCity);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const createCity = async (req: Request, res: Response) => {
  try {
    const city = await City.create(req.body);

    if (!city) res.status(404).json({ message: 'No body found!'});

    const populatedCity = await City.findOne({ 
      _id: city._id
    }).populate({
      path: 'properties',
      populate: {
        path: 'floorplans',
        populate: [
          { path: 'details' },
          { path: 'averages'}
        ]
      }
    });

    res.status(200).send(populatedCity);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const deleteCity = async (req: Request, res: Response) => {
  try {
    const deletedCity = await City.findOneAndDelete({
      _id: req.params.id
    })

    if (!deletedCity) res.status(404).json({ message: `City with id ${req.params.id} not found!`})

    res.status(200).json({ message: `City with id ${req.params.id} deleted successfully!`})
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export { getAllCities, getOneCity, createCity, deleteCity, checkExist };