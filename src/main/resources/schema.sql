CREATE TABLE Billett
(
    id INTEGER auto_increment not null,
    filmNavn varchar(255),
    antallBilletter varchar(255),
    fornavn varchar(255),
    etternavn varchar(255),
    telefonnr varchar(255),
    epost varchar(255),
    primary key (id)
);