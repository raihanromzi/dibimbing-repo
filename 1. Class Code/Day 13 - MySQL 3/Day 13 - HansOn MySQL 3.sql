create database f1;
use f1;

# create driver table
create table driver(
	id int auto_increment primary key,
    driver_name varchar(100) not null,
    team varchar(100) not null,
    point int default 0
);

# insert data into driver
insert into driver (driver_name,team)
values
	("max verstappen","red bull"),
	("sergio perez","red bull"),
	("charles lecrerc","ferrari"),
	("carlos sainz","ferrari"),
    ("lewis hamilton","mercedes");
  
# select all
select * from driver;

# count example
select count(id) from driver;

# count alias
select count(id) as driver_count from driver where team ="ferrari";

# select with in
select 
	driver_name,
    team
from driver 
where team in("red bull","mercedes");

# sama dengan
select
	driver_name,
	team
from driver
where team = "red bull" or team = "mercedes";

# not in example
select 
	driver_name,
    team
from driver 
where team not in("red bull","mercedes");

# sama dengan not in
select
	driver_name,
	team
from driver
where team != "red bull" and team != "mercedes";


# example of like query
select
	driver_name,
	team
from driver
where driver_name like ("max%");

select
	driver_name,
	team
from driver
where driver_name like ("%lec%");
    
update driver set driver_name="charles leclerc" where id=3;

select * from driver;

update driver set point = 258 where id=1;
update driver set point = 173 where id=2;
update driver set point = 178 where id=3;
update driver set point = 156 where id=4;
update driver set point = 146 where id=5;

# contoh between
select 
	driver_name,
    team,
    point
from driver where point between 130 and 200;

# sama dengan
select 
	driver_name,
    team,
    point
from driver where point >= 130 and  point <= 200;


# not between
select 
	driver_name,
    team,
    point
from driver where point not between 130 and 200;

# !=
select 
	driver_name,
    team,
    point
from driver where point <> 156;

#sama aja dengan
select 
	driver_name,
    team,
    point
from driver where point != 156;

# customer
create table customer(
	id int auto_increment primary key,
    name varchar(100) not null,
    customer_tier int not null,
    point int default 0
);

# insert data into customer
insert into customer (name,customer_tier)
values
	("udin",1),
	("ujang",2),
	("asep" ,3),
	("carlos",2),
    ("odi",3);


select * from customer;

update customer set customer_tier=1 where customer_tier=2;

update customer set customer_tier=2 where name like("u%");

# tracking ternak lele
create table ternak_lele(
	id int auto_increment primary key,
    jumlah_ikan int not null default 0,
	tanggal_mulai date not null,
    waktu_panen date,
    status bool default false
);

drop table ternak_lele;

insert into ternak_lele (jumlah_ikan,tanggal_mulai)
values
	(100,'2022-01-10'),
	(20,'2022-01-15'),
	(10 ,'2022-02-01'),
	(15,'2022-02-03'),
    (16,'2022-03-12');

select * from ternak_lele;

select 
 id,
 jumlah_ikan,
 tanggal_mulai
from ternak_lele
where tanggal_mulai between ('2022-01-01') and ('2022-02-28');

#fungsi month
select 
 id,
 jumlah_ikan,
 tanggal_mulai
from ternak_lele
where MONTH(tanggal_mulai) between 1 and 2;

select * from ternak_lele;

update ternak_lele 
set 
waktu_panen=null,
status =0
where  MONTH(tanggal_mulai) in(1,2);

update ternak_lele 
set 
waktu_panen='2022-05-20',
status = 1,
jumlah_ikan=0
where MONTH(tanggal_mulai) between 1 and 2;

select * from ternak_lele where status =1;
select * from ternak_lele where jumlah_ikan !=0;


truncate ternak_lele;

ALTER TABLE ternak_lele AUTO_INCREMENT = 1;

ALTER TABLE ternak_lele
Add COLUMN created_by varchar(100) not null, 
ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT NOW(),
Add COLUMN updated_by varchar(100),
ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT '1970-01-01 00:00:01';

insert into ternak_lele (jumlah_ikan,tanggal_mulai,created_by)
values
	(100,'2022-01-10','admin'),
	(20,'2022-01-15','admin'),
	(10 ,'2022-02-01','admin'),
	(15,'2022-02-03','admin'),
    (16,'2022-03-12','admin');
    
select * from ternak_lele;

update ternak_lele 
set 
waktu_panen='2022-05-20',
status = 1,
updated_by = 'admin',
updated_at = NOW()
where MONTH(tanggal_mulai) between 1 and 2;


CREATE TABLE buildings (
    building_no INT PRIMARY KEY AUTO_INCREMENT,
    building_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE rooms (
    room_no INT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(255) NOT NULL,
    building_no INT NOT NULL,
    FOREIGN KEY (building_no)
        REFERENCES buildings (building_no)
        ON DELETE CASCADE
);

INSERT INTO buildings(building_name,address)
VALUES('ACME Headquaters','3950 North 1st Street CA 95134'),
      ('ACME Sales','5000 North 1st Street CA 95134');
      
select * from buildings;

INSERT INTO rooms(room_name,building_no)
VALUES('Amazon',1),
      ('War Room',1),
      ('Office of CEO',1),
      ('Marketing',2),
      ('Showroom',2);
      
select * from rooms;

DELETE FROM buildings 
WHERE building_no = 1;

ALTER TABLE buildings AUTO_INCREMENT = 1;
ALTER TABLE rooms AUTO_INCREMENT = 1;

drop table rooms;

CREATE TABLE rooms (
    room_no INT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(255) NOT NULL,
    building_no INT,
    FOREIGN KEY (building_no)
        REFERENCES buildings (building_no)
        ON DELETE SET NULL
);

DELETE FROM buildings 
WHERE building_no = 2;


select * from rooms;
