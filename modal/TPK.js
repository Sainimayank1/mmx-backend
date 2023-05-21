import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        desc: {
            type: String
        },
        catag: {
            type: String
        },
        url: {
            type: String
        },
        public_id: {
            type: String
        }

    }, { timestamps: true }
)


const schema = mongoose.model("Toast&PitaChips&Khari", ProductSchema);

export default schema;