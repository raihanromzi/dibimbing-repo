USE Village;

INSERT INTO Registry
    (District, Address)
VALUES (2, 'Sungai Besar 10'),
       (5, 'Gedung besar 12'),
       (4, 'Gunung Indah 1'),
       (1, 'Kali Baru 20'),
       (3, 'Domba 20'),
       (1, 'Kali Baru 14'),
       (1, 'Kali Baru 15'),
       (3, 'Domba 12'),
       (7, 'Pisang Hijau 10'),
       (6, 'Bambu 12'),
       (5, 'Gedung besar 12'),
       (2, 'Sungai Besar 1'),
       (2, 'Sungai Besar 2'),
       (1, 'Kali Baru 12'),
       (2, 'Sungai Besar 3');

INSERT INTO Person(RegistryID, Name, Age, Gender, DateOfBirth)
VALUES (1, 'Asep Septian', 27, 'M', STR_TO_DATE('10 - 12 - 1994 10:11', '%m-%d-%Y %H:%i')),
       (2, 'Udin', 27, 'M', STR_TO_DATE('8 - 11 - 1993 10:11', '%m-%d-%Y %H:%i')),
       (1, 'Adit', 10, 'M', STR_TO_DATE('8 - 15 - 2011 10:11', '%m-%d-%Y %H:%i')),
       (2, 'Ipin', 10, 'M', STR_TO_DATE('8 - 15 - 2011 10:11', '%m-%d-%Y %H:%i')),
       (3, 'Dehan', 25, 'M', STR_TO_DATE('10-15-1996 10:11', '%m-%d-%Y %H:%i')),
       (3, 'Aulia', 25, 'F', STR_TO_DATE('1 - 2 - 1995 10:11', '%m-%d-%Y %H:%i')),
       (4, 'Sujoko', 30, 'M', STR_TO_DATE('1-18-1991 10:11', '%m-%d-%Y %H:%i')),
       (4, 'Nita', 29, 'F', STR_TO_DATE('2-23-1992 10:11', '%m-%d-%Y %H:%i')),
       (4, 'Sari', 9, 'F', STR_TO_DATE('2-25-2012 10:11', '%m-%d-%Y %H:%i')),
       (5, 'Suryo', 27, 'M', STR_TO_DATE('2-14-1994 10:11', '%m-%d-%Y %H:%i')),
       (5, 'Wina', 26, 'F', STR_TO_DATE('5-10-1987 10:11', '%m-%d-%Y %H:%i')),
       (6, 'Santo', 33, 'M', STR_TO_DATE('12-21-1988 10:11', '%m-%d-%Y %H:%i')),
       (7, 'Bayu', 30, 'M', STR_TO_DATE('10-23-1991 10:11', '%m-%d-%Y %H:%i')),
       (7, 'Winda', 33, 'F', STR_TO_DATE('9-21-1988 10:11', '%m-%d-%Y %H:%i')),
       (7, 'Intan', 8, 'F', STR_TO_DATE('4-17-2013 10:11', '%m-%d-%Y %H:%i')),
       (8, 'Agus', 70, 'M', STR_TO_DATE('8-8-1951 10:11', '%m-%d-%Y %H:%i')),
       (9, 'Weni', 50, 'F', STR_TO_DATE('11-10-1971 10:11', '%m-%d-%Y %H:%i')),
       (10, 'Indra', 30, 'M', STR_TO_DATE('8-22-1991 10:11', '%m-%d-%Y %H:%i')),
       (11, 'Hilman', 25, 'M', STR_TO_DATE('1-30-1996 10:11', '%m-%d-%Y %H:%i')),
       (11, 'Ayu', 25, 'F', STR_TO_DATE('4-28-1996 10:11', '%m-%d-%Y %H:%i')),
       (12, 'Viktor', 28, 'F', STR_TO_DATE('6-21-1993 10:11', '%m-%d-%Y %H:%i')),
       (13, 'Jaka', 40, 'M', STR_TO_DATE('3-15-1981 10:11', '%m-%d-%Y %H:%i')),
       (14, 'Yogi', 32, 'M', STR_TO_DATE('4-13-1989 10:11', '%m-%d-%Y %H:%i')),
       (14, 'Septi', 32, 'F', STR_TO_DATE('8-17-1989 10:11', '%m-%d-%Y %H:%i')),
       (14, 'Angga', 12, 'M', STR_TO_DATE('12-20-2009 10:11', '%m-%d-%Y %H:%i')),
       (15, 'Albert', 27, 'M', STR_TO_DATE('9-11-1994 10:11', '%m-%d-%Y %H:%i'));

INSERT INTO Vaccination(PersonID, Brand, VaccinationDate, SideEffect)
VALUES (1, 'Pijar', STR_TO_DATE('10-12-2021 10:11', '%m-%d-%Y %H:%i'), 0),
       (2, 'Pijar', STR_TO_DATE('10-12-2021 10:11', '%m-%d-%Y %H:%i'), 1);

INSERT INTO Vaccination(PersonID, Brand, VaccinationDate, SideEffect)
VALUES (3, 'Sinovac', STR_TO_DATE('10-12-2021 10:11', '%m-%d-%Y %H:%i'), 1),
       (4, 'Sinovac', STR_TO_DATE('10-12-2021 10:11', '%m-%d-%Y %H:%i'), 0);