import { model, Schema } from 'mongoose';
import  mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new Schema(
    {
        name: String,
        manufacturer: { 
            ref: { type: Schema.Types.ObjectId, ref: 'Manufacturer'},
            name: String
        },
        relevance: String,
        price: Number,
        photo: String
    },
    { versionKey: false }
);

productSchema.plugin(mongoosePaginate);

const Product = model('Product', productSchema);

export default Product;
