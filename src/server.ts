import express from "express";

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: "Hello NLW05"
  });
})

app.listen(3333, () => console.log("Server is running on http://localhost:3333"));
