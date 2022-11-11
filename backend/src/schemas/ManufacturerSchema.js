import { model, Schema } from 'mongoose';

const manufacturerSchema = new Schema(
    {
        brand:   { type: String, uppercase: true, trim: true },
        code:    { type: String, index: { unique: true }, trim: true},
        country: { type: String, trim: true },
        logo:    { type: String, lowercase: true, trim: true },
        link:    { type: String, trim: true }
    },
    { versionKey: false }
);

const Manufacturer = model('Manufacturer', manufacturerSchema);

export default Manufacturer;
