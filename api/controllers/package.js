import Package from "../models/Package.js";
import Attraction from "../models/Package.js";
import { createError } from "../utils/error.js";

export const createPackage = async (req,res,next) => {
    const packageId = req.params.packageid;
    const newPackage = new Package(req.body)

    try{
        const savedPackage = await newPackage.save()
        try{
            await Attraction.findByIdAndUpdate(packageId,{$push : {packages: savedPackage._id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedPackage)
    }catch(err){
        next(err);
    }
};

export const updatePackage = async (req, res, next) => {
    try {
      const updatedPackage= await Package.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPackage);
    } catch (err) {
      next(err);
    }
  };

  export const deletePackage = async (req, res, next) => {
    const packageId = req.params.packageid;
    try {
      await Package.findByIdAndDelete(req.params.id);
      try{
        await Attraction.findByIdAndUpdate(packageId,{ $pull:{packages: req.params.id},
        });
    }catch(err){
        next(err);
    }
      res.status(200).json("Package has been deleted.")
      } catch (err) {
        next(err);
      }
   }

  export const getPackage = async (req, res, next) => {
    try {
      const Package= await Package.findById(req.params.id);
      res.status(200).json(Package);
    } catch (err) {
      next(err);
    }
  };

  export const getPackages = async (req, res, next) => {
    try {
      const packages = await Package.find();
      res.status(200).json(packages);
    } catch (err) {
      next(err);
    }
  };