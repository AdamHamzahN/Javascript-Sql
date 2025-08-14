use sekolah;

update siswa
set kd_agama = '1'
-- regexp : Mencocokkan pola teks menggunakan regular expression
where nama regexp '^[NS]';

update siswa
set kd_agama = '4'
where nama regexp '^D';