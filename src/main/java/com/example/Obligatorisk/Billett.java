package com.example.Obligatorisk;

public class Billett {

    private int id;
    private String filmNavn;
    private int antallBilletter;
    private String fornavn;
    private String etternavn;
    private String telefonNr;
    private String epost;

    // Konstruktør, getters og setters


    public Billett(int id, String filmNavn, int antallBilletter, String fornavn, String etternavn, String telefonNr, String epost) {
        this.id = id;
        this.filmNavn = filmNavn;
        this.antallBilletter = antallBilletter;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonNr = telefonNr;
        this.epost = epost;
    }

    public Billett(){}

    public String getFilmNavn() {
        return filmNavn;
    }

    public void setFilmNavn(String filmNavn) {
        this.filmNavn = filmNavn;
    }

    public int getAntallBilletter() {
        return antallBilletter;
    }

    public void setAntallBilletter(int antallBilletter) {
        this.antallBilletter = antallBilletter;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonNr() {
        return telefonNr;
    }

    public void setTelefonNr(String telefonNr) {
        this.telefonNr = telefonNr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
