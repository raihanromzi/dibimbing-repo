USE Village;

# Add Audit Column
ALTER TABLE Vaccination
    Add COLUMN CreatedBy varchar(100) NOT NULL DEFAULT "ADMIN",
    ADD COLUMN CreatedAt TIMESTAMP    NOT NULL DEFAULT NOW(),
    Add COLUMN UpdatedBy varchar(100) DEFAULT "ADMIN",
    ADD COLUMN UpdatedAt TIMESTAMP    NOT NULL;

ALTER TABLE Person
    Add COLUMN CreatedBy varchar(100) NOT NULL DEFAULT "ADMIN",
    ADD COLUMN CreatedAt TIMESTAMP    NOT NULL DEFAULT NOW(),
    Add COLUMN UpdatedBy varchar(100) DEFAULT "ADMIN",
    ADD COLUMN UpdatedAt TIMESTAMP    NOT NULL;