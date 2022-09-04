use city_facts;

create table `union_test1`(
	`id` int primary key,
    `name` varchar(100),
    `subject` varchar(100)
);


create table `union_test2`(
	`id` int primary key,
    `name` varchar(100),
    `subject` varchar(100)
);

insert into union_test1 (id,name,subject)
values (1,"bambang","test"),
		(2,"asep","test2");
        
insert into union_test2 (id,name,subject)
values (1,"bambang","test3"),
		(2,"asep","test2");
        
select * from union_test1;

select * from union_test2;


select 
	name,
    subject
from union_test1
union
select
	name,
    subject
from union_test2;

select 
	name,
    subject
from union_test1
union all
select
	name,
    subject
from union_test2;

select 
	name
from union_test1
union
select
	name
from union_test2;

select 
	name
from union_test1
union all
select
	name
from union_test2;

create table `qualifying`(
	`id` int primary key,
    `name` varchar(100),
    `team` varchar(100),
    `type` varchar(10),
    `time` int
);

insert into qualifying (id,name,team,type,time)
values 
	   (1,"hamilton","mercedes","q1","75"),
	   (2,"hamilton","mercedes","q2","68"),
	   (3,"hamilton","mercedes","q3","62"),
	   (4,"verstappen","red bull","q1","70"),
	   (5,"verstappen","red bull","q2","65"),
	   (6,"verstappen","red bull","q3","60"),
	   (7,"sainz","adi putro","q1","72"),
	   (8,"sainz","adi putro","q2","66"),
	   (9,"sainz","adi putro","q3","61");

select * from qualifying;
select 
	name,
    team,
    sum(time) as total_time
from qualifying
group by name,team
order by 3 asc;

select 
	name,
    team,
    max(time) as total_time
from qualifying
group by name,team
order by 3 desc;

select 
	name,
    team,
    min(time) as total_time
from qualifying
group by name,team
order by 3 desc;

select 
	name,
    team,
    avg(time) as total_time
from qualifying
group by name,team
order by 3 desc;

select 
	count(name)
from qualifying
group by name;

select 
	name,
    team,
    avg(time) as total_time,
    case 
		when  avg(time)  <=65 then "fast"
		when  avg(time) <=67 then "medium"
        else "slow"
	end as result
from qualifying
group by name,team
order by 3 desc;

select * from qualifying;

select * from qualifying where id in(1,3,6);

select * from qualifying where id=1 or id=2 or id=3;

SET autocommit = 0;

insert into qualifying (id,name,team,type,time)
values 
	   (10,"ghasly","alpha tauri","q1","75");	 

select * from qualifying;

start transaction;
insert into qualifying (id,name,team,type,time)
values 
	   (11,"ghasly","alpha tauri","q2","75");	 
commit;

start transaction;
insert into qualifying (id,name,team,type,time)
values 
	   (12,"ghasly","alpha tauri","q2","75");	
ROLLBACK;

start transaction;
update qualifying set time = 20;
ROLLBACK;

start transaction;
delete from qualifying;
ROLLBACK;

start transaction;
delete from qualifying where id=11;
commit;

# ketika ada alter. ini autocommit

#latihan
# bikin database baru
# namanya ecommerce
create database ecommerce;
use ecommerce;

# bikin table transaksi/transaction
# id nya, user idnya int, nominal isinya bisa +/-, tanggal jam pemakaian
create table transaksi(
	id int auto_increment,
    user_id int not null,
    nominal int,
    date timestamp not null default now(),
    primary key (id)
);

select * from transaksi;

insert into transaksi (user_id,nominal)
values 
	(1,50000),
    (1,-10000),
    (2,100000),
    (2,-50000);

# buat query buat tau total penggunaan (nominal total) dari semua user id yang ada
# diurutkan pake user id terkecil -> besar
# cluenya pake sum
select 
	user_id,
    sum(nominal) as total_penggunaan
from transaksi
group by user_id
order by 1 asc;

# buat query untuk dapet pengeluaran terbesar dari user-user yang ada
# diurutkan dari yang terbesar-terkecil
select 
	user_id,
    min(nominal) as total_pengeluaran
from transaksi
group by user_id
order by 2 asc;

# buat query untuk dapet pemasukan terbesar dari user-user yang ada
# diurutkan dari yang terbesar-terkecil
select 
	user_id,
    max(nominal) as total_pengeluaran
from transaksi
group by user_id
order by 2 desc;


insert into transaksi (user_id,nominal,date)
values 
	(1,10000,'2021-09-03 12:15:00'),
    (1,12000,'2021-09-03 12:15:00'),
    (2,10000,'2021-09-03 12:15:00'),
    (2,-10000,'2021-09-03 12:15:00');

# buat query untuk dapat rata" penggunaan berdasarkan user pada tahun 2021
# dirurutkan dari rata" terbesar-> terkecil
select
	user_id,
    avg(nominal) as rata2_pengeluaran,
    year(date) as year
from transaksi
where year(date) =2021
group by user_id,year(date)
order by 2 desc;


insert into transaksi (user_id,nominal)
values 
	(1,50000),
    (1,10000),
    (2,100000),
    (2,50000);

insert into transaksi (user_id,nominal)
values 
	(3,50000),
    (3,10000),
    (4,100000);

# bikin labeling berdasarkan berapa kali orang ini topup/menggunakan
# kalau dia pake lebih dari sama dengan 5 x dia diamond
# kalau dia diantara 2-4 dia gold
# diluar itu silver
select 
	user_id,
    count(user_id) as num_transaction,
case
	when count(user_id) >= 5 then "diamond"
	when count(user_id) >=2 and  count(user_id) <=4  then "gold"
    else "silver"
end as tier
from transaksi
group by 1;
