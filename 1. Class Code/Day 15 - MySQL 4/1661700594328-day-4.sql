create database `city_fact`;
use `city_fact`;

select * from facts;
select * from city;

SELECT * FROM facts
INNER JOIN city ON city.facts_id = facts.id
LIMIT 5;

select * from facts as f
inner join city as c on c.facts_id = f.id
order by f.id asc
Limit 5;

select * from facts f
inner join city c 
	on c.facts_id = f.id
order by f.id asc
Limit 5;

select 
	f.name as country,
    c.name as capital_city
from city as c
inner join 
	facts as f 
on f.id = c.facts_id
where c.capital =1
order by country asc;

select count(distinct(name)) from facts;

select distinct(name)
from facts;


select count(distinct(facts_id)) from city;

select distinct(facts_id)
from city;

select * from facts f
left join 
	city c
on c.facts_id = f.id;

select
	f.name country,
    f.population,
    c.name city
from facts f
left join
	city c
on c.facts_id = f.id
where c.name is null;


select 
	f.name country,
    c.name city
from facts f
left join
	city c
on
	c.facts_id = f.id
order by 1 asc
limit 5;

select 
	f.name country,
    c.name city
from city c
right join
	facts f
on
	f.id = c.facts_id
order by 1 asc
limit 5;

select 
	f.name country,
    c.name city
from city c
full outer join
	facts f 
on f.id=c.facts_id
limit 5;


select 
	f.name country,
    c.name city
from city c
left join
	facts f 
on f.id=c.facts_id
UNION 
select 
	f.name country,
    c.name city
from city c
right join
	facts f 
on f.id=c.facts_id;

select 
	name,
    migration_rate
from facts
order by migration_rate desc;

select 
	name,
    migration_rate
from facts
order by 2 desc;


# munculin ibu kota, negaranya, populasi kota. kemudian order pake populasi hasilnya 10 aja dari terbesar
select 
    c.name as capital_city,
    f.name as country,
    c.population as city_population
from city as c
inner join
	facts as f
on f.id = c.facts_id
where c.capital =1
order by c.population desc
limit 10;

select 
	f.name country,
    c.name capital_city
from facts f
inner join(
	select * from city where capital =1
) c on c.facts_id = f.id
limit 10;


select 
    c.name as city,
    f.name as country,
    c.population as city_population,
    f.birth_rate,
    f.death_rate,
    (f.birth_rate-f.death_rate) growth
from city as c
inner join
	facts as f
on f.id = c.facts_id
where (f.birth_rate-f.death_rate) <0 and c.capital=1
order by growth asc;

select 
    c.name city,
	f.name country,
    c.population population
from facts f
inner join(
	select * from city 
    where  population>10000000 and capital=0
) c on c.facts_id = f.id
order by 3 desc;


CREATE table `categories`(
	`id` int primary key,
    `name` varchar(100),
    `parent_id` int,
    foreign key(`parent_id`) references `categories`(`id`)
);

insert into categories(id,name) values (1,"buku");
insert into categories(id,name,parent_id) values (2,"buku fiksi",1),(3,"buku non-fiksi",1);
insert into categories(id,name,parent_id) values (4,"novel",2),(5,"fabel",2),(6,"komik",2);
insert into categories(id,name,parent_id) values (7,"pelajaran",3),(8,"autobiografi",3);

select * from categories;

select cat.name category_name, prn.name parent_name
from categories cat, categories prn
where cat.parent_id = prn.id;

select * from facts;
select * from city;





