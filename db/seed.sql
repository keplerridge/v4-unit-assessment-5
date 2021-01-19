CREATE TABLE helo_users(
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    profile_pic TEXT
);

CREATE TABLE helo_posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    CONTENT TEXT,
    img TEXT,
    author_id INT REFERENCES helo_users(id),
    date_created TIMESTAMP
);

