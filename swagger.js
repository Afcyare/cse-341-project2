const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "tasks Api",
    description: "tasks Api",
  },
  host: "cse-341-project2-ckgd.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
