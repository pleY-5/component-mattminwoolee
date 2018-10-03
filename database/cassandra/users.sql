DROP TABLE IF EXISTS test01.users;

CREATE TABLE IF NOT EXISTS test01.users (
  id bigint PRIMARY KEY,
  name text,
  elite bigint,
  friends bigint,
  reviews bigint,
  avatar text
);

COPY test01.users (id, name, elite, friends, reviews, avatar) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/usersCSQL/users0.csv' WITH HEADER=FALSE;