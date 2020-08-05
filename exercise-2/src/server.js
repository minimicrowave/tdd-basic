import express from "express";
import db from "./db";

const app = express();

app.get("/users/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await db.getUserByUsername(username);

    if (!user) {
      return res.status(404).send();
    }

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { app };
