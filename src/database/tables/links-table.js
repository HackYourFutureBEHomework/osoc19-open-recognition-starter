"use strict";

const database = require("../database");
const SQL = require("pg-template-tag").default;

const createTable = () => {
  database.query(`
  CREATE TABLE IF NOT EXISTS
    links
    (
      id SERIAL PRIMARY KEY,
      to_user_id INTEGER NOT NULL REFERENCES users (id),
      endpoint TEXT NOT NULL
    );`);
};

const createRow = async (toUserId, generatedEndpoint) =>
  (await database.query(SQL`
  INSERT INTO
    links
    (
      to_user_id,
      endpoint
    )
  VALUES
  (
    ${toUserId},
    ${generatedEndpoint}
  )
  RETURNING
    *;
`))[0];

const getRow = async id =>
  (await database.query(SQL`
  SELECT
    *
  FROM
    links
  WHERE
    to_user_id = ${id};
`))[0] || nul;

console.log("links table is created ...");

module.exports = {
  createTable,
  createRow,
  getRow
};
