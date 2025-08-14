create database pegawai;

use pegawai;

create table hobi(
id int primary key,
nama_hobi varchar(50) not null);

-- Cara lain membuat table
-- create table hobi(
-- id int auto_increment,
-- nama_hobi varchar(50) not null
-- primary key(id));

create table asn(
nip char(18) primary key,
nama varchar(100),
id_hobi int,
foreign key(id_hobi) references hobi(id));

alter table asn change nama nama_lengkap varchar(100);

rename table asn to pns;

drop table pns;
drop database pegawai;

insert into hobi values 
(1,'Memasak'),(2,'Olahraga'),(3,'Menyanyi'),(4,'Membaca');


insert into asn values 
('123456789101112131','Rose',1),
('234567891011121314','Jasmin',1),
('345678910111213141','Ellen',2),
('456789101112131415','Alice',3),
('567891011121314151','Belle',2),
('678910111213141516','Wise',4),
('789101112131415161','Anby',1);

delete from hobi;
delete from asn;

select * from hobi;
select * from asn;
select nip, nama from asn where nip in ('123456789101112131','345678910111213141'); 


update asn set nama = 'Bennet' where nip = '123456789101112131';

show databases;


