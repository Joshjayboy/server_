// import mongoose from 'mongoose';
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
// export default mongoose.model("Post", PostSchema);

// const mongoose = require('mongoose');

// const PostSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   imageUrl: String
// });

// module.exports = mongoose.model('Post', PostSchema);
