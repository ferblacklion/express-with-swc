import express from "express";
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  const a: any = { b: 1 };
  console.log("t", a?.x);

  res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
