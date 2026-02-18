CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INTEGER CHECK (year > 1880),
    genre VARCHAR(64),
    image_url VARCHAR(255),
    description TEXT,
    create_at TIME
);

INSERT INTO movies(title, year, genre, image_url, description, create_at)
VALUES ('Now You See Me', 2013, 'Thriller/Crime', '/images/Now1', '')