/*
- Czy pola tekstowe są dostępne i użytkownik może wprowadzać do nich liczby.
- Czy przyciski działają poprawnie i wywołują odpowiednie obliczenia.
- Czy wynik obliczenia jest wyświetlany poprawnie.
- Czy aplikacja działa poprawnie dla różnych kombinacji liczb (dodatnie, ujemne, zero).
- Czy aplikacja obsługuje błędy (np. dzielenie przez zero).
*/

describe('Kalkulator', () => {
  it('pola tekstowe', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('12345')
    cy.get('#liczba2').type('67890')
  })

  it('dodawanie', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('420')
    cy.get('#liczba2').type('999')
    cy.get('#add').click()
    cy.get('#wynik').contains('1419')
  })

  it('odejmowanie', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('200')
    cy.get('#liczba2').type('400')
    cy.get('#subtract').click()
    cy.get('#wynik').contains('-200')
  })

  it('odejmowanie z minusem', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('200')
    cy.get('#liczba2').type('-400')
    cy.get('#subtract').click()
    cy.get('#wynik').contains('600')
  })

  it('mnozenie', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('124')
    cy.get('#liczba2').type('532')
    cy.get('#multiply').click()
    cy.get('#wynik').contains('65968')
  })

  it('dzielenie', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('400')
    cy.get('#liczba2').type('4')
    cy.get('#divide').click()
    cy.get('#wynik').contains('100')
  })

  it('mnozenie - celowy błąd', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('124')
    cy.get('#liczba2').type('532')
    cy.get('#multiply').click()
    cy.get('#wynik').contains('12345')
  })

  it('mnozenie przez zero', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('20')
    cy.get('#liczba2').type('0')
    cy.get('#multiply').click()
    cy.get('#wynik').contains('0')
  })

  it('dzielenie przez zero', () => {
    cy.visit('index.html')
    cy.get('#liczba1').type('10')
    cy.get('#liczba2').type('0')
    cy.get('#divide').click()
    cy.get('#wynik').contains('Nie można dzielić przez zero')
    })
})