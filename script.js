let result = document.getElementById('wynik');

function dodaj() {
    const liczba1 = parseFloat(document.getElementById('liczba1').value);
    const liczba2 = parseFloat(document.getElementById('liczba2').value);
    const wynik = liczba1 + liczba2;
    result.textContent = wynik;
}

function odejmij() {
    const liczba1 = parseFloat(document.getElementById('liczba1').value);
    const liczba2 = parseFloat(document.getElementById('liczba2').value);
    const wynik = liczba1 - liczba2;
    result.textContent = wynik;
}

function pomnoz() {
    const liczba1 = parseFloat(document.getElementById('liczba1').value);
    const liczba2 = parseFloat(document.getElementById('liczba2').value);
    const wynik = liczba1 * liczba2;
    result.textContent = wynik;
}

function podziel() {
    const liczba1 = parseFloat(document.getElementById('liczba1').value);
    const liczba2 = parseFloat(document.getElementById('liczba2').value);
    const wynik = (liczba2 != 0) ? liczba1 / liczba2 : "Nie można dzielić przez zero";
    result.textContent = wynik;
}