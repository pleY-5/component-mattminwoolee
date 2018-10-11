CREATE TABLE users (
  user_id bigserial NOT NULL,
  name CHARACTER varying(50),
  elite INTEGER NOT NULL,
  friends INTEGER NOT NULL,
  reviews INTEGER NOT NULL,
  avatar CHARACTER varying(100),
  PRIMARY KEY(user_id)
);

\COPY users(name, friends, elite, reviews, avatar) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/data/users.csv' DELIMITER ',' CSV;