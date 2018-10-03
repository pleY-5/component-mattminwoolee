DROP DATABASE IF EXISTS photos;
CREATE DATABASE photos;
USE photos;

CREATE TABLE users (
  user_id bigserial NOT NULL,
  name CHARACTER varying(50),
  elite INTEGER NOT NULL,
  friends INTEGER NOT NULL,
  reviews INTEGER NOT NULL,
  avatar CHARACTER varying(100),
  PRIMARY KEY(user_id)
);

CREATE TABLE restaurants (
  id bigserial NOT NULL,
  name CHARACTER varying(50),
  PRIMARY KEY(id)
);

CREATE TABLE pictures (
  id bigserial NOT NULL,
  url CHARACTER varying(100),
  postdate CHARACTER varying(20),
  caption CHARACTER varying(50),
  user INTEGER NOT NULL,
  restaurant INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user) REFERENCES users(user_id),
  FOREIGN KEY (restaurant) REFERENCES restaurants(id)
);

COPY users(name, friends, elite, reviews, avatar) 
FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/data/users.csv' DELIMITER ',' CSV;

COPY restaurants(name) 
FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/data/companyNames.csv' DELIMITER ',' CSV;

COPY photos(url, postdate, caption, user, restaurant) 
FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/data/photosNew.csv' DELIMITER ',' CSV;