$(function(){
    hentAlle();
});
function validerTelefonNr(telefonNr) {
    const regex = /^[0-9]{8}$/; // Sjekker om det er 8 tall
    return regex.test(telefonNr);
}

function validerEpost(epost) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard regex for e-post validering
    return regex.test(epost);
}


function kjopBillett(){
    const billett = {

        filmNavn : $("#filmNavn").val(),
        antallBilletter : $("#antallBilletter").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonNr : $("#telefonNr").val(),
        epost : $("#epost").val(),
    }

    let feil = false;

    // Nullstill alle feilmeldinger
    $("span[id^='feil']").text("");

    // Valideringer
    if (billett.filmNavn === "Velg Film: ") {
        $("#feilFilmNavn").text("Vennligst velg en film.");
        feil = true;
    }

    if (isNaN(billett.antallBilletter) || billett.antallBilletter <= 0) {
        $("#feilAntallBilletter").text("Antall billetter må være et tall.");
        feil = true;
    }

    if (!billett.fornavn.trim()) {
        $("#feilFornavn").text("Vennligst skriv inn fornavn.");
        feil = true;
    }

    if (!billett.etternavn.trim()) {
        $("#feilEtternavn").text("Vennligst skriv inn etternavn.");
        feil = true;
    }

    if (!validerTelefonNr(billett.telefonNr)) {
        $("#feilTelefonNr").text("Vennligst skriv inn et gylding telefon nummer.");
        feil = true;
    }

    if (!validerEpost(billett.epost)) {
        $("#feilEpost").text("Vennligst skriv inn en gyldig e-post.");
        feil = true;
    }

    if (feil) {
        return; // Avslutt funksjonen hvis det er feil
    }

    // Send billettdata til serveren
    $.post("lagre", billett, function (){
        hentAlle();
    });

    // Nullstill inputfeltene
    $("#filmNavn").val("Velg Film: ");
    $("#antallBilletter").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonNr").val("");
    $("#epost").val("");
}

function hentAlle(){
    $.get("hentAlle", function (billetter){
        formaterData(billetter);
    });
}

function formaterData(billetter) {
    let ut =
        "<table class='table'"+
        "<thead>"+
        "<tr>"+
        "<th>Film</th>"+
        "<th>Antall billetter</th>"+
        "<th>Fornavn</th>"+
        "<th>Etternavn</th>"+
        "<th>Telefonnr</th>"+
        "<th>Epost</th>"+
        "</tr>"+
        "</thead>"+
        "<tbody>";
    for (const bil of billetter) {
        ut +=   "<tr>"+
            "<td>"+ bil.filmNavn +" </td>"+
            "<td>"+bil.antallBilletter+"</td>"+
            "<td>"+bil.fornavn+"</td>"+
            "<td>"+bil.etternavn+"</td>"+
            "<td>"+bil.telefonNr+"</td>"+
            "<td>"+bil.epost+"</td>"+
            "<td> <a class='btn btn-primary' href='endreBillett.html?id="+bil.id+"'>Endre</a></td>"+
            "<td> <button class='btn btn-danger' onclick='slettEnBillett("+bil.id+")'>Slett</button></td>"+
            "</tr>";
    }
    ut +=
        "</tbody>"+
        " </table>";
    $("#output").html(ut);
}
function slettAlle(){
    $.get("/slettAlle", function (){
        hentAlle();
    });
}
function slettEnBillett(id) {
    const url = "/slettEnBillett?id="+id;
    $.get( url, function() {
        window.location.href = 'index.html';
        hentAlle()
    });
};

