use pegawai;

create table asn_audit(
id int auto_increment primary key,
aksi varchar(20),
nip char(18),
nama varchar(100),
id_hobi int,
tgl datetime);

delete from asn_audit;

create trigger after_nip_ditambah
after insert on asn
for each row
insert into asn_audit
set 
aksi = 'Tambah',
nama = new.nama,
id_hobi = new.id_hobi,
tgl = now();

insert into asn values ('891011121314151617','Joko',1);

select * from asn_audit;
drop trigger after_nip_ditambah;