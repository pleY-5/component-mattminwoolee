

-- CREATE TABLE pictures (
--   id bigserial NOT NULL,
--   url CHARACTER varying(100),
--   postdate CHARACTER varying(20),
--   caption CHARACTER varying(50),
--   "user" INTEGER NOT NULL,
--   restaurant INTEGER NOT NULL,
--   PRIMARY KEY (id)
-- );

\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos0.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos1.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos2.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos3.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos4.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos5.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos6.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos7.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos8.csv' DELIMITER ',' CSV;
\COPY pictures(url, postdate, caption, "user", restaurant) FROM '/Users/Mattminwoolee/desktop/SDC/photo-wheel/database/postgresql/data/photos/photos9.csv' DELIMITER ',' CSV;

