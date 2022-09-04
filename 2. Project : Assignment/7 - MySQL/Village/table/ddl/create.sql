USE Village;

CREATE TABLE Registry
(
    ID       INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    District INT          NOT NULL,
    Address  VARCHAR(255) NOT NULL
);

CREATE TABLE Person
(
    ID          INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    RegistryID  INT,
    FOREIGN KEY (RegistryID) REFERENCES Registry (ID),
    Name        VARCHAR(255) NOT NULL,
    Age         INT          NOT NULL,
    Gender      CHAR         NOT NULL,
    DateOfBirth DATETIME     NOT NULL
);

CREATE TABLE Vaccination
(
    ID              INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    PersonID        INT,
    FOREIGN KEY (PersonID) REFERENCES Person (ID),
    Brand           VARCHAR(255) NOT NULL,
    VaccinationDate TIMESTAMP    NOT NULL,
    SideEffect      BOOL         NOT NULL
)