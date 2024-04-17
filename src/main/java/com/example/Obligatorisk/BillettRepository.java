package com.example.Obligatorisk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;


    public void lagreBillett(Billett innBillett) {
        String sql = "INSERT INTO Billett (filmNavn, antallBilletter, fornavn, etternavn, telefonNr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilmNavn(), innBillett.getAntallBilletter(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getTelefonNr(), innBillett.getEpost());
    }

    public List<Billett> hentAlleBilletter() {
        String sql = "SELECT * FROM Billett ORDER BY Etternavn";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }
    public void slettAlleBilletter(){
        String sql ="DELETE FROM Billett";
        db.update(sql);
    }

    public void slettEnBillett(int id) {
        String sql = "DELETE FROM Billett WHERE id=?";
        db.update(sql,id);
    }
    public Billett hentEnBillett(int id) {
        Object[] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Billett WHERE id=?";
        Billett enBillett = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Billett.class));
        return enBillett;
    }

    public void endreEnBillett(Billett billett){
        String sql = "UPDATE Billett SET filmNavn=?, antallBilletter=?, fornavn=?, etternavn=?, telefonNr=?, epost=? where id=?";
        db.update(sql,billett.getFilmNavn(),billett.getAntallBilletter(), billett.getFornavn(), billett.getEtternavn(), billett.getTelefonNr(), billett.getEpost(), billett.getId());
    }
}
