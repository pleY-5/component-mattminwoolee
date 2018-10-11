ALTER TABLE pictures ADD CONSTRAINT distfk FOREIGN KEY (restaurant) REFERENCES restaurants (id) MATCH FULL;

ALTER TABLE pictures ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;

CREATE INDEX IX_pictures_restaurant ON pictures USING HASH (restaurant);