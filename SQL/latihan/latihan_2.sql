--  1
create database db_blog_posts;

use db_blog_posts;

-- 2
create table users(
id int primary key,
name varchar(100)
);

create table blog_posts(
id int primary key,
title varchar(100),
body text,
author_id int,
foreign key(author_id) references users(id));

create table post_categories(
post_id int,
category_id int,
primary key (post_id,category_id),
foreign key (post_id) references blog_posts(id),
foreign key (category_id) references categories(id));

create table categories(
id int primary key,
name varchar(100));


-- 3 
insert into users values 
(1,'John Doe'),(2,'Robert'),(3,'Frank'),(4,'Jane');

insert into blog_posts values 
(1,'Algorithm','this is article for algorithm',1),
(2,'Lorem Ipsum','lorem ipsum dolor sit amet',1),
(3,'NodeJS','Node.js is a JavaScript runtime built on Chrome`s V8 JavaScript engine',2),
(4,'ReactJS','ReactJS is JavaScript library for building user interfaces',4),
(5,'Git','Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency',3),
(6,'Basketball','Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender`s hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop',2);

insert into categories values
(1,'Basic'),(2,'Library'),(3,'Unknown'),(4,'Sport');

insert into post_categories values
(1,1),
(2,3),
(3,1),
(3,2),
(4,2),
(4,1),
(5,1),
(6,4);

-- 4
select * from users u join blog_posts p on u.id = author_id where u.id = '1'; 

-- 5
select c.name as category_name, p.title as post_title, u.name as author_name
from users u
	join blog_posts p 
		on u.id = p.author_id
	join post_categories pc
		on p.id = pc.post_id
	join categories c
		on pc.category_id = c.id
where c.name = 'Basic';

-- 6
select c.name as 'Category Name', p.title as 'Post Title', p.body
from users u
	join blog_posts p 
		on u.id = p.author_id
	join post_categories pc
		on p.id = pc.post_id
	join categories c
		on pc.category_id = c.id
where u.name in ('Robert','Frank');

-- 7
select u.name as 'Author Name',c.name as 'Category Name' 
from users u
	join blog_posts p 
		on u.id = p.author_id
	join post_categories pc
		on p.id = pc.post_id
	join categories c
		on pc.category_id = c.id
where p.id in (
	select pc.post_id
    from post_categories p
    group by post_id
    having count (category_id) >= 2);
