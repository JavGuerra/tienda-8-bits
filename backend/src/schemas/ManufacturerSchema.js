import { model, Schema } from 'mongoose';

const manufacturerSchema = new Schema(
    {
        name: String,
        cif: String,
        country: String,
        description: String,
        logo: String
    },
    { versionKey: false }
);

const Manufacturer = model('Manufacturer', manufacturerSchema);

export default Manufacturer;
