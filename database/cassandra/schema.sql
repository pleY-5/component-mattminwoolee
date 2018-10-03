DROP TABLE IF EXISTS test01.restaurant_name;
-- DROP TABLE IF EXISTS test01.photos
-- DROP TABLE IF EXISTS test01.users;



CREATE TABLE IF NOT EXISTS test01.restaurant_name (
	name text PRIMARY KEY,
  photos list<int>
);

CREATE TABLE IF NOT EXISTS test01.users (
  id integer PRIMARY KEY,
  name text,
  elite integer,
  friends integer,
  reviews integer,
  avatar text
);

COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants0.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants1.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants2.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants3.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants4.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants5.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants6.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants7.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants8.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants9.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants10.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants11.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants12.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants13.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants14.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants15.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants16.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants17.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants18.csv' WITH HEADER=FALSE;
COPY restaurant_name (name, photos) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/restaurantsCSQL/restaurants19.csv' WITH HEADER=FALSE;