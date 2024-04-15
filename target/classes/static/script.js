/*const bestilling = [];

function kjopBillett() {
    const filmNavn = document.getElementById("filmNavn").value;
    const antallBilletter = document.getElementById("antallBilletter").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonNr").value;
    const epost = document.getElementById("epost").value;


    if (filmNavn === "Velg film her") {
        document.getElementById("feilFilmNavn").textContent = " Velg en film";
    } else {
        document.getElementById("feilFilmNavn").textContent = "";
    }
    //billetter
    if (!antallBilletter || isNaN(antallBilletter) || antallBilletter <= 0) {
        document.getElementById("feilAntallBilletter").textContent = "Skriv antall billettter";
    } else {
        document.getElementById("feilAntallBilletter").textContent = "";
    }
    //fornavn
    if (!fornavn) {
        document.getElementById("feilFornavn").textContent = "Fyll ut fornavn";
    } else {
        document.getElementById("feilFornavn").textContent = "";
    }
    //etternavn
    if (!etternavn) {
        document.getElementById("feilEtternavn").textContent = " Fyll ut etternavn";
    } else {
        document.getElementById("feilEtternavn").textContent = "";
    }
    //telefonnummer: https://stackoverflow.com/questions/73656999/regex-to-validate-only-digits-from-0-9-maximum-of-8-digits-till-a-dot-and-only
    if (!telefonnr || !/^[0-9]{8}$/.test(telefonnr)) {
        document.getElementById("feilTelefonNr").textContent = "Skriv inn et gyldig telefonnummer";
    } else {
        document.getElementById("feilTelefonNr").textContent = "";

    }
    //epost: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

    if (!epost || !/^[^\s*]+@[^\s@]+\.[^\s@]+$/.test(epost)) {
        document.getElementById("feilEpost").textContent = "Skriv inn en guldig epost";
    } else {
        document.getElementById("feilEpost").textContent = "";
    }

    // Sjekker om det er feil i valideringen
    if (document.getElementById("feilFilmNavn").textContent ||
        document.getElementById("feilAntallBilletter").textContent ||
        document.getElementById("feilFornavn").textContent ||
        document.getElementById("feilEtternavn").textContent ||
        document.getElementById("feilTelefonNr").textContent ||
        document.getElementById("feilEpost").textContent) {
        // Hvis det er feil, avbryt funksjonen uten å legge til billetten i arrayet
        return;
    }

//variabelene går inn i en billett
    const nyBillett = {
        Film: filmNavn,
        AntallBilletter: antallBilletter,
        Fornavn: fornavn,
        Etternavn: etternavn,
        Telefonnr: telefonnr,
        Epost: epost
    };

//billett blir lagt til i arrayet
    bestilling.push(nyBillett);
    output();

    document.getElementById("filmNavn").value = "Velg film her";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonNr").value = "";
    document.getElementById("epost").value = "";

}


function output() {
    //billeten skrives ut
    const outputDiv = document.getElementById("output");

    // Tømmer innholdet i outputDiv før du legger til nye billetter
    outputDiv.innerHTML = "";

    const tableStart = `
        <table class="table">
            <thead>
                <tr>
                    <th>Film</th>
                    <th>Antall billetter</th>
                    <th>Fornavn</th>
                    <th>Etternavn</th>
                    <th>Telefonnr</th>
                    <th>Epost</th>
                </tr>
            </thead>
            <tbody>
    `;

    const tableEnd = `
            </tbody>
        </table>
    `;

    let tableContent = '';

    bestilling.forEach(billett => {
        tableContent += `
            <tr>
                <td>${billett.Film}</td>
                <td>${billett.AntallBilletter}</td>
                <td>${billett.Fornavn}</td>
                <td>${billett.Etternavn}</td>
                <td>${billett.Telefonnr}</td>
                <td>${billett.Epost}</td>
            </tr>
        `;
    });

    outputDiv.innerHTML = tableStart + tableContent + tableEnd;
}
function slett() {
    bestilling.length = 0;
    output();

    // sletter teksten i boksene

    document.getElementById("filmNavn").value = "Velg film her";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonNr").value = "";
    document.getElementById("epost").value = "";

    //sletter billetten
    document.getElementById("output").innerHTML = ""
}*/

function validerTelefonNr(telefonNr) {
    const regex = /^[0-9]{8}$/; // Sjekker om det er 8 tall
    return regex.test(telefonNr);
}

function validerEpost(epost) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard regex for e-post validering
    return regex.test(epost);
}

/*function kjopBillett(){
    const billett = {
        filmNavn : $("#filmNavn").val(),
        antallBilletter : $("#antallBilletter").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonNr : $("#telefonNr").val(),
        epost : $("#epost").val(),
    }

    // Valideringer
    if (billett.filmNavn === "Velg Film: ") {
        $("#feilFilmNavn").text("Vennligst velg en film.");
        return;
    } else {
        $("#feilFilmNavn").text("");
    }

    if (isNaN(billett.antallBilletter) || billett.antallBilletter <= 0) {
        $("#feilAntallBilletter").text("Antall billetter må være et positivt tall.");
        return;
    } else {
        $("#feilAntallBilletter").text("");
    }

    if (!billett.fornavn.trim()) {
        $("#feilFornavn").text("Vennligst skriv inn fornavn.");
        return;
    } else {
        $("#feilFornavn").text("");
    }

    if (!billett.etternavn.trim()) {
        $("#feilEtternavn").text("Vennligst skriv inn etternavn.");
        return;
    } else {
        $("#feilEtternavn").text("");
    }

    if (!validerTelefonNr(billett.telefonNr)) {
        $("#feilTelefonNr").text("Telefonnummeret må være 8 siffer.");
        return;
    } else {
        $("#feilTelefonNr").text("");
    }

    if (!validerEpost(billett.epost)) {
        $("#feilEpost").text("Vennligst skriv inn en gyldig e-postadresse.");
        return;
    } else {
        $("#feilEpost").text("");
    }

    $.post("lagre", billett, function (){
        hentAlle();
    });

    $("#filmNavn").val("");
    $("#antallBilletter").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonNr").val("");
    $("#epost").val("");
}*/
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
        $("#feilAntallBilletter").text("Antall billetter må være et positivt tall.");
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
        $("#feilTelefonNr").text("Telefonnummeret må være 8 siffer.");
        feil = true;
    }

    if (!validerEpost(billett.epost)) {
        $("#feilEpost").text("Vennligst skriv inn en gyldig e-postadresse.");
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