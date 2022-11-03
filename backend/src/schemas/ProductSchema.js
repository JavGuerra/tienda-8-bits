import { model, Schema } from 'mongoose';
import  mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new Schema(
    {
        model: { type: String, uppercase: true, trim: true },
        code:  { type: String, index: { unique: true }, trim: true },
        manufacturer: { 
            ref: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
            brand: String
        },
        relevance: Boolean,
        info:  { type: String, trim: true },
        price: { type: Number, min: 1 },
        year:  { type: Number, min: 1970, max: 1990 },
        photo: { type: String, lowercase: true, trim: true }
    },
    { versionKey: false }
);

productSchema.plugin(mongoosePaginate);

const Product = model('Product', productSchema);

export default Product;
