const {
  addEmp,
  getEmp,
  updateEmp,
  deleteEmp,
  loadEdit,
} = require("../controller/empController");
const express = require("express");
const router = express.Router();

router.get("/", getEmp);
router.post("/add", addEmp);
router.post("/edit/:_id", updateEmp);
router.post("/delete/:_id", deleteEmp);
router.get("/edit/:_id", loadEdit);

module.exports = router;
