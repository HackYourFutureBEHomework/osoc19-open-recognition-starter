"use strict";

const database = require("../database");
const SQL = require("pg-template-tag").default;

const createTable = () =>
  database.query(`
  CREATE TABLE IF NOT EXISTS
    trust_relation
    (
      id SERIAL PRIMARY KEY,
      from_user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
      to_user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
      direction INTEGER NOT NULL,
      active BOOLEAN NOT NULL
    );
`);

const createRow = async data =>
  database.query(SQL`
  INSERT INTO
    trust_relation
    (
      id,
      from_user_id,
      to_user_id,
      direction,
      active
    )
  VALUES
    (
      ${data.id},
      ${data.fromUserId},
      ${data.toUserId},
      ${data.direction},
      ${data.active}
    )
`);

const getRows = async () =>
  await database.query(`
    SELECT
      *
    FROM
      trust_relation;
  `);

const getRow = async id =>
  await database.query(SQL`
    SELECT
      *
    FROM
      trust_relation
    WHERE
    id = ${id};
  `);

const updateRow = async (id, data) =>
  (await database.query(SQL`
  UPDATE
    trust_relation
  SET
    from_user_id = ${data.fromUserId},
    to_user_id = ${data.toUserId},
    direction = ${data.direction},
    active = ${data.active}
  WHERE
    id = ${id}
  RETURNING
    *;
`))[0];

const deleteRow = async id =>
  database.query(SQL`
  DELETE FROM
    trust_relation
  WHERE
  id = ${id};
`);

module.exports = {
  createTable,
  createRow,
  getRows,
  getRow,
  updateRow,
  deleteRow
};
