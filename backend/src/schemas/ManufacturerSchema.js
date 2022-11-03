import { model, Schema } from 'mongoose';

const manufacturerSchema = new Schema(
    {
        name: { type: String, uppercase: true, trim: true },
        code: { type: String, index: { unique: true }, trim: true},
        country: { type: String, trim: true },
        description: { type: String, trim: true },
        logo: { type: String, lowercase: true, trim: true }
    },
    { versionKey: false }
);

const Manufacturer = model('Manufacturer', manufacturerSchema);

export default Manufacturer;
