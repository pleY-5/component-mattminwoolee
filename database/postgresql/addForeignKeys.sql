-- Add Foreign keys photos.user to reference => users.id
ALTER TABLE photos1 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos2 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos3 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos4 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos5 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos6 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos7 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos8 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos9 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;
ALTER TABLE photos10 ADD CONSTRAINT rk_users_id FOREIGN KEY ("user") REFERENCES users (id) MATCH FULL;