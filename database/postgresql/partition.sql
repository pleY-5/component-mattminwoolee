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

COPY photos(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos0.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos1.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos2.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos3.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, user, restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos4.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, user, restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos5.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, user, restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos6.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, user, restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos7.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, user, restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos8.csv' DELIMITER ',' CSV;
COPY photos(url, postdate, caption, user, restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/datagenerator/photos9.csv' DELIMITER ',' CSV;
