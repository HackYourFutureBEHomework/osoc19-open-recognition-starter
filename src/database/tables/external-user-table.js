"use strict";

const database = require("../database");
const SQL = require("pg-template-tag").default;

const createTable = () =>
  database.query(`
  CREATE TABLE IF NOT EXISTS
    external_user
    (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      profession TEXT NOT NULL
    );
`);

const createRow = async data =>
  (await database.query(SQL`
    INSERT INTO
      external_user
      (
        id,
        full_name,
        email,
        profession
      )
    VALUES
    (
      ${data.id},
      ${data.fullName},
      ${data.email},
      ${data.profession}
    )
  `))[0];

const getRows = async () =>
  await database.query(`
    SELECT
      *
    FROM
      external_user;
  `);

const getRow = async id =>
  await database.query(SQL`
    SELECT
      *
    FROM
      external_user
    WHERE
    id = ${id};
  `);

const deleteRow = async id =>
  database.query(SQL`
  DELETE FROM
    external_user
  WHERE
  id = ${id};
`);

module.exports = {
  createTable,
  createRow,
  getRows,
  getRow,
  deleteRow
};
