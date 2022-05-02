INSERT INTO department (name) VALUES 
("CEO"),
("Admin"),
("Marketing"),
("Accountant");

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Waldo", "CEO", 1, 1),
("Reniel", "Admin", 2, 2),
("Ronnie", "Marketing", 3, 3),
("Reynaldo", "Online-Marketing", 3, 3),
("O'Niel", "Accountant", 4, 4),
("Ricky", "Assistant-Accountant", 4, 4);

INSERT INTO employee_role (department_id, title, salary) VALUES
(1, "CEO", 9999999),
(4, "assistant-Accountant", 10000),
(3, "Marketing", 100000),
(2, "Admin", 1000000),
(4, "Accountant", 50000),
(3, "Online-Marketing", 100000),


    