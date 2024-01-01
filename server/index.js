const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8090;

app.get("/", (req, res) => {
  res.json({ message: "Server is running on port " + PORT });
});

// Mongoose schema
const schemaData = mongoose.Schema(
  {
    doctor_id: String,
    name: String,
    specialization: String,
    schedule: String,
    date: String,
    fees_per_consultation: String,
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("user", schemaData);

// Read - Fetch all data
app.get("/getData", async (req, res) => {
  try {
    const data = await userModel.find({});
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data." });
  }
});

// Create data
app.post("/create", async (req, res) => {
  const {
    doctor_id,
    name,
    specialization,
    schedule,
    date,
    fees_per_consultation,
  } = req.body;

  const data = new userModel({
    doctor_id,
    name,
    specialization,
    schedule,
    date,
    fees_per_consultation,
  });

  try {
    await data.save();
    res.json({ success: true, message: "Data saved successfully", data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to save data." });
  }
});

// Update data
app.put("/update", async (req, res) => {
  const {
    _id,
    doctor_id,
    name,
    specialization,
    schedule,
    date,
    fees_per_consultation,
  } = req.body;

  const updatedData = {
    doctor_id,
    name,
    specialization,
    schedule,
    date,
    fees_per_consultation,
  };

  try {
    const data = await userModel.findByIdAndUpdate(_id, updatedData, {
      new: true,
    });
    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found." });
    }
    res.json({ success: true, message: "Data updated successfully", data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update data." });
  }
});

// Delete data
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await userModel.findByIdAndDelete(id);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found." });
    }
    res.json({ success: true, message: "Data deleted successfully", data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete data." });
  }
});

mongoose
  .connect("mongodb://127.0.0.1:27017/crudoperation")
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log("Server is running on port " + PORT));
  })
  .catch((err) => console.log(err));
