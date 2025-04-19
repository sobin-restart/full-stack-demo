CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

INSERT INTO users (name, email)
VALUES ('Sobin', 'sobin@example.com'),
       ('Lucy', 'lucy@openai.com');
