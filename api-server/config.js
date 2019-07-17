process.env.MONGODB_URL = "mongodb+srv://itsmegith:28April2017@openrecogition-qzauh.mongodb.net/test?retryWrites=true&w=majority";
process.env.PORT = 3000;

console.log(`
configging -->
  MONGODB_URL: ${process.env.MONGODB_URL}
  PORT: ${process.env.PORT}
`);
