INSERT INTO department (name) VALUES 
("CEO"),
("Admin"),
("Marketing"),
("Accountant");

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Waldo", "SomewhereNear", "CEO", 1),
("Reniel", "Christianson", "Admin", 2),
("Ronnie", "Dawg", "Marketing", 3),
("Reynaldo", "Obana", "Online-Marketing", 3),
("O'Niel", "Dude", "Accountant", 4),
("Ricky", "Spanish", "Assistant-Accountant", 4);

INSERT INTO employee_role (department_id, title, salary) VALUES
(1, "CEO", 9999999),
(4, "assistant-Accountant", 10000),
(3, "Marketing", 100000),
(2, "Admin", 1000000),
(4, "Accountant", 50000),
(3, "Online-Marketing", 100000);


    