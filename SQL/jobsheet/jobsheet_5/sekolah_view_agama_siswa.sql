use sekolah;

create view vw_agama_siswa as 
	select siswa.nis as NIS,
    siswa.nama as Nama_Siswa,
    agama.nama as Agama_Siswa
from siswa, agama
where siswa.kd_agama = agama.kode;

drop view vw_agama_siswa;

select * from vw_agama_siswa;