const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const cors = require("cors");

// Import Routes and Error Handler
const routes = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");
//Load Config
dotenv.config();

// connect database
connectDB();

// Middleware
app.use(cors()); // Enable CORS for external calls
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allowed-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept, Z-Key",
  );
  res.setHeader(
    "Access-Control-Allow-methods",
    "GET, POST, PUT, DELETE, OPTIOS",
  );
  next();
});

// API Routes
app.use("/", routes);

// Global Error Handler (Must be the last middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
