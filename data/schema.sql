 
  CREATE TABLE IF NOT EXISTS Depratment(
  "dept_id" SERIAL PRIMARY KEY,
  "dept_name" VARCHAR(255) NOT NULL,
  );

 CREATE TABLE IF NOT EXISTS EmployeeList(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "age" INT NOT NULL,
  "dept_id" SERIAL not null,
  "nationality" CHAR(255) NOT null,
  constraint fk_dept foreign key (dept_id) references department(dept_id)
  );

  insert into department  (dept_name) values ('psychology');

  insert into employeelist  (name,email,age,dept_id,nationality) values ('sarah','sar123@hotmail.com',28,5,'jordanian');