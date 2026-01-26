const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "tasks Api",
    description: "tasks Api",
  },
  host: "cse340-7.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
