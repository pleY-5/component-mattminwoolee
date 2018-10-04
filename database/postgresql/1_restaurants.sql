DROP DATABASE IF EXISTS yelp;
CREATE DATABASE yelp;
USE yelp;

CREATE TABLE restaurants (
  id bigserial NOT NULL,
  name CHARACTER varying(50),
  PRIMARY KEY(id)
);

COPY restaurants(name) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/companyNames.csv' DELIMITER ',' CSV;