USE yelp;

CREATE TABLE photos (
  id bigserial NOT NULL,
  url CHARACTER varying(100),
  postdate CHARACTER varying(20),
  caption CHARACTER varying(50),
  user INTEGER NOT NULL,
  restaurant INTEGER NOT NULL,
  PRIMARY KEY (id)
);

