"use strict";

// Import the Express server module
const express = require("express");
const userTable = require("../../database/tables/users-table");
const statementTable = require("../../database/tables/statements-table");
const linkTable = require("../../database/tables/links-table");

// Create our router for our users API
const userRouter = express.Router();

// Get all users
userRouter.get("/", async (req, res, next) => {
  try {
    const users = await userTable.getRows();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
});

// Create a user
userRouter.post("/", async (req, res, next) => {
  const data = req.body;
  try {
    const user = await userTable.createRow(data);
    console.log("232323232", user);
    return res.send(user);
  } catch (err) {
    return next(err);
  }
});

// Get one specific user by id
userRouter.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await userTable.getRow(Number(id));
    return res.json(user);
  } catch (err) {
    return next(err);
  }
});

// Modify one specific user by id
userRouter.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const user = await userTable.updateRow(id, data);
    return res.json(user);
  } catch (err) {
    return next(err);
  }
});

// Delete one specific user by id
userRouter.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await userTable.deleteRow(id);
    return res.json({});
  } catch (err) {
    return next(err);
  }
});

// Get all the statements are wirtten to a specific user
userRouter.get("/:id/statements", async (req, res, next) => {
  const id = req.params.id;
  try {
    const userStatements = await statementTable.getUserStatements(id);
    return res.json(userStatements);
  } catch (err) {
    return next(err);
  }
});

userRouter.post("/:id/links", async (req, res, next) => {
  const makeid = length => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const toUserId = req.params.id;
  const generatedEndpoint = makeid(20);
  try {
    const link = await linkTable.createRow(toUserId, generatedEndpoint);
    return res.send(link);
  } catch (err) {
    return next(err);
  }
});

//   // generate random link
//   // add row to link table (user_id, link)
//   // return the generated link
//   try {
//     const userStatements = await statementTable.getUserStatements(id);
//     return res.json(userStatements);
//   } catch (err) {
//     return next(err);
//   }
// });

// userRouter.get("/link", async (req, res, next) => {
//   const id = req.params.id;
//   // select user_id by link(in the query string)
//   // return user id
//   try {
//     const userStatements = await statementTable.getUserStatements(id);
//     return res.json(userStatements);
//   } catch (err) {
//     return next(err);
//   }
// });

// Export our user router
module.exports = userRouter;
