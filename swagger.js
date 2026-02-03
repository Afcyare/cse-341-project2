const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "tasks Api",
    description: "Project 2: Authentication with GitHub OAuth",
  },
  host: "cse-341-project2-ckgd.onrender.com",
  schemes: ["https"],

  securityDefinitions: {
    github_auth: {
      type: "oauth2",
      authorizationUrl: "https://github.com/login/oauth/authorize",
      flow: "implicit", 
      scopes: {
        "user:email": "Read your email from GitHub",
      },
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
