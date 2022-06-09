DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    -- role_title VARCHAR(20) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    ON DELETE
    SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE
    SET NULL

);
CREATE TABLE employee_role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE
    SET NULL

);

INSERT INTO department (name) VALUES 
("CEO"),
("Admin"),
("Marketing"),
("Accountant");

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Waldo", "SomewhereNear", 1, 1),
("Reniel", "Christianson", 2, 2),
("Ronnie", "Dawg", 3, 3),
("Reynaldo", "Obana", 3, 3),
("O'Niel", "Dude", 4, 4),
("Ricky", "Spanish", 4, 4);

INSERT INTO employee_role (title, salary, department_id) VALUES
( "CEO", 9999999, 1),
( "assistant-Accountant", 10000, 4),
( "Marketing", 100000, 3),
( "Admin", 1000000, 2),
( "Accountant", 50000, 4),
( "Online-Marketing", 100000, 3);

-- SELECT * FROM employee