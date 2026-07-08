import mongoose, { schema } from "mongoose";
import mongooseAggergatPaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({

  videofile: {
    type: String,//url
    required: true
  },
  thumbnail: {
    type: String,//url
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },

  ispublished: {
    type: boolean,
    default: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

},
  {
    timestamps: true
  }
)
videoSchema.plugin(mongooseAggergatPaginate)
export const video = mongoose.model("video", videoSchema)