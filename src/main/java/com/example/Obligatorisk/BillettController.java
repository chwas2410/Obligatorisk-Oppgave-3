package com.example.Obligatorisk;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
public class BillettController {

    @Autowired
    private BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett(Billett billett){
        rep.lagreBillett(billett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.hentAlleBilletter();
    }
    @GetMapping("/hentEnBillett")
    public Billett hentEnBillett(int id){
        return rep.hentEnBillett(id);
    }

    @PostMapping("/endreEnBillett")
    public void endreEnBillett(Billett billett){
        rep.endreEnBillett(billett);
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBilletter();
    }

    @GetMapping("/slettEnBillett")
    public void slettEnBillett(int id){
        rep.slettEnBillett(id);
    }


}


