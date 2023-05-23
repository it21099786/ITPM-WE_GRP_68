import Attraction from '../models/Attraction.js';
import Package from '../models/Package.js';

export const createAttraction = async (req, res, next) => {
  const newAttraction = new Attraction(req.body);

  try {
    const savedAttraction = await newAttraction.save();
    res.status(200).json(savedAttraction);
  } catch (err) {
    next(err);
  }
};

export const updateAttraction = async (req, res, next) => {
  try {
    const updatedAttraction = await Attraction.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedAttraction);
  } catch (err) {
    next(err);
  }
};

export const deleteAttraction = async (req, res, next) => {
  try {
    await Attraction.findOneAndDelete(req.params.id);
    res.status(200).json('Package has been deleted.');
  } catch (err) {
    next(err);
  }
};

export const getAttraction = async (req, res, next) => {
  try {
    const attraction = await Attraction.findById(req.params.id);
    res.status(200).json(attraction);
  } catch (err) {
    next(err);
  }
};

export const getAttractions = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const attractions = await Attraction.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(attractions);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',');
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Attraction.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const AnuradhapuraCount = await Attraction.countDocuments({
      type: 'Anuradhapura',
    });
    const NegamboCount = await Attraction.countDocuments({ type: 'Negambo' });
    const YalaCount = await Attraction.countDocuments({ type: 'Yala' });
    const NuwaraeliyaCount = await Attraction.countDocuments({
      type: 'Nuwaraeliya',
    });
    const ColomboCount = await Attraction.countDocuments({ type: 'Colombo' });

    res.status(200).json([
      { type: 'Anuradhapura', count: AnuradhapuraCount },
      { type: 'Negambo', count: NegamboCount },
      { type: 'Yala', count: YalaCount },
      { type: 'Nuwaraeliya', count: NuwaraeliyaCount },
      { type: 'Colombo', count: ColomboCount },
    ]);
  } catch (err) {
    next(err);
  }
};
