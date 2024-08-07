CREATE DATABASE car_rental_db;
GO

USE car_rental_db;
GO

CREATE TABLE cars (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    brand NVARCHAR(255) NOT NULL,
    year INT NOT NULL,
    color NVARCHAR(255) NOT NULL,
    price DECIMAL(18,2) NOT NULL,
    rented BIT NOT NULL
);
GO

CREATE TABLE users (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL,
    password NVARCHAR(255) NOT NULL
);
GO