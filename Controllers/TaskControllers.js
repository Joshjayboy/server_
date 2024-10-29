const TaskModel = require("../Models/TaskModels");

// get tasks
module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    // res.status(200).json(tasks);
    res.send(tasks);
    // res.send("Hi it works");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// add a task
module.exports.saveTask = (req, res) => {
  try {
    const { task, description, image } = req.body;
    TaskModel.create({ task, description, image }).then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// update a task
module.exports.updateTask = (req, res) => {
  try {
    const { id } = req.params;
    const { task, description } = req.body;
    TaskModel.findByIdAndUpdate(id, { task, description }).then(() =>
      res.send("Updated Successfully...")
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// delete a task
module.exports.deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    TaskModel.findByIdAndDelete(id).then(() =>
      res.send("Updated Successfully...")
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
