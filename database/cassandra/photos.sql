DROP TABLE IF EXISTS test01.photos;

CREATE TABLE IF NOT EXISTS test01.photos (
  photo_id bigint PRIMARY KEY,
  url text,
  date text,
  caption text,
  user_id bigint
);

COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos0.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos1.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos2.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos3.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos4.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos5.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos6.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos7.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos8.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos9.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos10.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos11.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos12.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos13.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos14.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos15.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos16.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos17.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos18.csv' WITH HEADER=FALSE;
COPY test01.photos (photo_id, url, date, caption, user_id) FROM '/Users/Mattminwoolee/Desktop/SDC/photo-wheel/database/cassandra/data/photosCSQL/photos19.csv' WITH HEADER=FALSE;
