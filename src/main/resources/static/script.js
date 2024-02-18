let billetter = [];

function kjopticket() {

    let film = document.getElementById("film").value;
    let antall = document.getElementById("Antall").value;
    let fornavn = document.getElementById("Fornavn").value;
    let etternavn = document.getElementById("Etternavn").value;
    let telefonnr = document.getElementById("Telefonnr").value;
    let epost = document.getElementById("Epost").value;

    if (film === "Velg film her" || antall === "" || fornavn === "" || etternavn === "" || telefonnr === "" || epost === "") {
        alert("Vennligst fyll ut alle feltene.");
        return;
    }

    if (!validertelefonnr(telefonnr)) {
        alert("Vennligst skriv inn et gyldig telefonnummer.");
        return;
    }

    if (!valideremail(epost)) {
        alert("Vennligst skriv inn en gyldig e-postadresse.");
        return;
    }

    let billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };

    billetter.push(billett);

    visbilett();

    nullstill();
}

function visbilett() {
    let output = document.getElementById("ut");
    output.innerHTML = "<h2>Alle billetter</h2>";

    // Display each ticket in the array
    for (let i = 0; i < billetter.length; i++) {
        let ticket = billetter[i];
        output.innerHTML += `<p>${ticket.film} - ${ticket.antall} billetter - ${ticket.fornavn} ${ticket.etternavn} - ${ticket.telefonnr} - ${ticket.epost}</p>`;
    }
}

function nullstill() {
    // Clear form inputs
    document.getElementById("film").value = "Velg film her";
    document.getElementById("Antall").value = "";
    document.getElementById("Fornavn").value = "";
    document.getElementById("Etternavn").value = "";
    document.getElementById("Telefonnr").value = "";
    document.getElementById("Epost").value = "";
}

function AltDelete() {
    billetter = [];
    visbilett();
}

function validertelefonnr(telefonnr) {
    // Simple validation for a Norwegian phone number
    return /^\d{8}$/.test(telefonnr);
}

function valideremail(email) {
    // Simple validation for an email address
    return /\S+@\S+\.\S+/.test(email);
}