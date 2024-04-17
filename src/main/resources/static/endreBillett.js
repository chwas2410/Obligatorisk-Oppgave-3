$(function(){
    // hent kunden med kunde-id fra url og vis denne i skjemaet
    const id = window.location.search.substring(1);
    const url = "/hentEnBillett?"+id;
    $.get(url,function(billett){
        $("#id").val(billett.id); // må ha med id inn skjemaet, hidden i html
        $("#filmNavn").val(billett.filmNavn);
        $("#antallBilletter").val(billett.antallBilletter);
        $("#fornavn").val(billett.fornavn);
        $("#etternavn").val(billett.etternavn);
        $("#telefonNr").val(billett.telefonNr);
        $("#epost").val(billett.epost);
    });
});

function endreBillett() {
    const billett = {
        id : $("#id").val(), // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endres
        filmNavn : $("#filmNavn").val(),
        antallBilletter : $("#antallBilletter").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonNr : $("#telefonNr").val(),
        epost : $("#epost").val(),
    }
    $.post("/endreEnBillett",billett,function(){
        window.location.href = 'index.html';
    });
}