CREATE DATABASE FitnessApp;

USE FitnessApp;

CREATE TABLE Users (
    id BIGINT PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE Workouts (
    id BIGINT PRIMARY KEY IDENTITY(1,1),
    user_id BIGINT,
    name VARCHAR(255) NOT NULL,
    duration INT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Exercises (
    id BIGINT PRIMARY KEY IDENTITY(1,1),
    workout_id BIGINT,
    name VARCHAR(255) NOT NULL,
    sets INT,
    reps INT,
    FOREIGN KEY (workout_id) REFERENCES Workouts(id)
);