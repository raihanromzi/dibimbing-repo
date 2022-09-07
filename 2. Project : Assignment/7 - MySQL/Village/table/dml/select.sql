USE Village;

# Show All Female
SELECT *
FROM Person
WHERE Gender = "F";

SELECT ID, Address
FROM Registry
WHERE District IN (1, 4, 5);