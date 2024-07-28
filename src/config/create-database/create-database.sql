CREATE DATABASE car_rental_db;

USE car_rental_db;

CREATE TABLE cars (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    brand NVARCHAR(255) NOT NULL,
    year INT NOT NULL,
    color NVARCHAR(255) NOT NULL,
    price DECIMAL(18,2) NOT NULL,
    rented BIT NOT NULL
);

CREATE TABLE users (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL,
    password NVARCHAR(255) NOT NULL,
);