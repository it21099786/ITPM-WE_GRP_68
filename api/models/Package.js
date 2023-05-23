import mongoose from 'mongoose';
const PackageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      unique: true,
    },
    maxPeople: {
        type: Number,
        required: true,
        unique: true,
      },
    desc: {
      type: String,
      required: true,
    },
    packageNumber: [{number:Number, unavailableDates:{type:[Date]}}],
},

{timestamps:true}

);

export default mongoose.model("Package", PackageSchema);
