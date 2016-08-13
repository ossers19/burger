CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE about_a_burger(
id INT AUTO_INCREMENT PRIMARY KEY,
burger_name varchar(255),
devoured BOOLEAN,
date TIMESTAMP
);

INSERT INTO about_a_burger(burger_name, devoured)
VALUES ('Bacon Burger', 'False');

INSERT INTO about_a_burger(burger_name, devoured)
VALUES ('Union Burger', 'False');

INSERT INTO about_a_burger(burger_name, devoured)
VALUES ('Cheese Burger', 'False');

INSERT INTO about_a_burger(burger_name, devoured)
VALUES ('Ham Burger', 'False');