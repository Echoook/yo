-- Create Employee table
CREATE TABLE `Employee` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `emp_first_name` VARCHAR(255) NOT NULL,
    `emp_last_name` VARCHAR(255) NOT NULL
);

-- Create Guest table
CREATE TABLE `Guest` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL
);

-- Create Room table
CREATE TABLE `Room` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `room_number` INT NOT NULL,
    `room_type` VARCHAR(255) NOT NULL,
    `room_rate` DECIMAL(10, 2) NOT NULL
);

-- Create Restaurant table
CREATE TABLE `Restaurant` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL
);

-- Create Reservation table
CREATE TABLE `Reservation` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `reservation_date` DATETIME NOT NULL,
    `number_days` INT NOT NULL,
    `roomId` INT,
    `guestId` INT,
    `employeeId` INT,
    `restaurantId` INT,
    FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`),
    FOREIGN KEY (`guestId`) REFERENCES `Guest`(`id`),
    FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`),
    FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant`(`id`)
);

-- Create Transport table
CREATE TABLE `Transport` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `type` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `guestId` INT,
    FOREIGN KEY (`guestId`) REFERENCES `Guest`(`id`)
);

-- Insert initial data into Employee table
INSERT INTO `Employee` (`emp_first_name`, `emp_last_name`) VALUES
('John', 'Doe'),
('Jane', 'Smith'),
('Michael', 'Johnson');

-- Insert initial data into Guest table
INSERT INTO `Guest` (`first_name`, `last_name`) VALUES
('Alice', 'Brown'),
('Bob', 'Davis'),
('Charlie', 'Wilson');

-- Insert initial data into Room table
INSERT INTO `Room` (`room_number`, `room_type`, `room_rate`) VALUES
(101, 'Single', 100.00),
(102, 'Double', 150.00),
(103, 'Suite', 200.00);

-- Insert initial data into Restaurant table
INSERT INTO `Restaurant` (`name`, `location`) VALUES
('The Fancy Fork', '1st Avenue'),
('Burger Barn', '2nd Street'),
('Pasta Palace', '3rd Boulevard');

-- Insert initial data into Reservation table
INSERT INTO `Reservation` (`reservation_date`, `number_days`, `roomId`, `guestId`, `employeeId`, `restaurantId`) VALUES
('2024-06-01 12:00:00', 3, 1, 1, 1, 1),
('2024-06-02 12:00:00', 2, 2, 2, 2, 2),
('2024-06-03 12:00:00', 1, 3, 3, 3, 3);

-- Insert initial data into Transport table
INSERT INTO `Transport` (`type`, `price`, `guestId`) VALUES
('Taxi', 20.00, 1),
('Bus', 15.00, 2),
('Limousine', 50.00, 3);
