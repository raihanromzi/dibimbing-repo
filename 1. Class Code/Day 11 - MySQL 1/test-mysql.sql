# 1.  create database dibimbing;
use dibimbing;

# 2. create customer table
CREATE TABLE customers (
	name                          VARCHAR(255),
    industry                      VARCHAR(255),
    project1_id                   INT(6),
    project1_feedback             TEXT,
    project2_id                   INT(6),
    project2_feedback             TEXT,
    contact_person_id             INT(6),
    contact_person_and_role       VARCHAR(300),
    phone_number                  VARCHAR(12),
    address                       VARCHAR(255),
    city                          VARCHAR(255),
    zip                           VARCHAR(5)
    );
    
# 3. add column id as primary key
ALTER TABLE customers
	ADD COLUMN id INT(6) AUTO_INCREMENT PRIMARY KEY FIRST;
    
# 4. change column contact person and role
ALTER TABLE customers
	CHANGE COLUMN contact_person_and_role contact_person VARCHAR(300);

ALTER TABLE customers
    ADD COLUMN contact_person_role VARCHAR(300) AFTER contact_person;
    
# remove project related column from customers table
ALTER TABLE customers
	DROP COLUMN project1_id,
    DROP COLUMN project1_feedback,
    DROP COLUMN project2_id,
    DROP COLUMN project2_feedback;
    
# Bikin table baru
CREATE TABLE project_feedbacks(
	id INT(6) AUTO_INCREMENT PRIMARY KEY,
	project_id INT(6),
	customer_id INT(6),
	project_feedback    TEXT
);

# 2NF IMPROVEMENT
# alter table remove contact person
ALTER TABLE customers
	DROP COLUMN contact_person,
    DROP COLUMN contact_person_role,
    DROP COLUMN phone_number;
    
# create table contact persons
CREATE TABLE contact_persons(
	id INT(6) PRIMARY KEY,
    name VARCHAR(300),
    role VARCHAR(300), 
	phone_number VARCHAR(15)
);

# 3NF IMPROVEMENT
ALTER TABLE customers
	DROP CITY;
    
#create zips table
CREATE TABLE zips(
	zip VARCHAR(5) PRIMARY KEY,
    city VARCHAR(255)
)
