const empModel = require("../model/empModel");

const getEmp = async (req, res) => {
  try {
    const result = await empModel.find();
    res.render("index", { result: result, req: req });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addEmp = async (req, res) => {
  const { name, salary } = req.body;
  if (name && salary) {
    try {
      const data = new empModel({
        name: name,
        salary: salary,
      });
      await data.save();
      res.redirect("/");
    } catch (error) {
       res.status(500).render("error", { message: error.message });
    }
  } else {
    res.redirect("/?error=empty");
  }
};

const updateEmp = async (req, res) => {
  try {
    const result = await empModel.findByIdAndUpdate(
      { _id: req.params._id },
      { $set: { name: req.body.name, salary: req.body.salary } }
    );
    console.log(result);

    res.redirect("/");
  } catch (error) {
     res.status(500).render("error", { message: error.message });
  }
};

const deleteEmp = async (req, res) => {
  try {
    const result = await empModel.findByIdAndDelete({ _id: req.params._id });
    res.redirect("/");
  } catch (error) {
     res.status(500).render("error", { message: error.message });
  }
};

const loadEdit = async (req, res) => {
  try {
    const emp = await empModel.findById(req.params._id);
    res.render("edit", { emp: emp });
  } catch (error) {
    res.redirect("/?error=loadIssue");
  }
};

module.exports = { getEmp, addEmp, updateEmp, deleteEmp, loadEdit };
