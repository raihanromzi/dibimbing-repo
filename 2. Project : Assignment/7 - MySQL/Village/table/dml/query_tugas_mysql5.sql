USE Village;

# Create a query to find how many person is in a family registry sort it by the largest
SELECT RegistryID, COUNT(RegistryID) as Jumlah_Orang
FROM Person
GROUP BY RegistryID
ORDER BY COUNT(RegistryID) DESC;

# Create a query to show a person vaccination data showing the person name, vaccine id, and brand.
SELECT Person.Name,
       Vaccination.ID as ID_Vaksin,
       Vaccination.Brand
FROM Vaccination
         LEFT JOIN Person
                   ON Person.ID = Vaccination.PersonID;

# Create A query to show the total of side effects of vaccination by brand
SELECT Vaccination.Brand,
       SUM(Vaccination.SideEffect = 1) AS "Total Side Effect"
FROM Vaccination
GROUP BY Vaccination.Brand;

# Create a query to categorize person data by age put <18 as minor, >60 as senior and those in between as adult.
SELECT ID,
       RegistryID,
       Name,
       Age,
       Gender,
       CASE
           WHEN Age < 18 THEN "Minor"
           WHEN Age > 60 THEN "Senior"
           ELSE "Adult"
           END AS "Categorize"
FROM Person;