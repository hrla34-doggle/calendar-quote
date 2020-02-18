
DROP DATABASE IF EXISTS calendarpg;

CREATE DATABASE calendarpg;

\c calendarpg;

/* Create other tables and define schemas for them here! */

DROP TABLE IF EXISTS trips;
CREATE TABLE trips (
  id VARCHAR PRIMARY KEY NOT NULL,
  code VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  msrp VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  discounted VARCHAR NOT NULL,
  days VARCHAR NOT NULL,
  dates VARCHAR NOT NULL,
  rating VARCHAR NOT NULL,
  reviews VARCHAR NOT NULL
)