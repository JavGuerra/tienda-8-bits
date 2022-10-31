import { model, Schema } from 'mongoose';

const manufacturerSchema = new Schema(
    {
        name: String,
        cif: String,
        address: String
    },
    { versionKey: false }
);

const Manufacturer = model('Manufacturer', manufacturerSchema);

export default Manufacturer;
