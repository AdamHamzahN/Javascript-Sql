use pegawai;

-- COMMIT - Tidak bisa rollback
start transaction;
insert into hobi values (5,'Menulis');
commit;
rollback;

select * from hobi;

-- Tanpa Commit
start transaction;
insert into hobi values (6,'Bersepeda');

rollback;
