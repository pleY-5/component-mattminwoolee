DROP TABLE photos;

CREATE TABLE photos (
  id integer PRIMARY KEY,
  url text,
  date text,
  caption text,
  user_id integer,
);

COPY photos (id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos0.csv' WITH HEADER=FALSE;
