DROP DATABASE IF EXISTS problems;
CREATE DATABASE problems;

\c problems;

CREATE TABLE problems (
  ID SERIAL PRIMARY KEY,
  slug VARCHAR,
  title VARCHAR,
  description VARCHAR,
  criticality INT,
  additional_data JSON DEFAULT '{}',
  created TIMESTAMP DEFAULT current_timestamp
);
