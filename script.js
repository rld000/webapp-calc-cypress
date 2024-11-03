let operation = document.getElementById('dzialanie');
let result = document.getElementById('wynik');

function isNumber(val){
    return typeof val === 'number';
}

function operate(sign)
{
    const l1 = parseFloat(document.getElementById('liczba1').value);
    const l2 = parseFloat(document.getElementById('liczba2').value);

    const tmp = (a, b, sign) => {
        switch (sign) {
            case '+':
              return a + b;
            case '-':
              return a - b;
            case '*':
              return a * b;
            case '/':
              if (b === 0) {
                return("dzielenie przez zero");
              }
              return a / b;
            };
        };

    const wynik = tmp(l1, l2, sign);

    operation.textContent = isNumber(wynik) ? `${l1} ${sign} ${l2} = ` : "";
    result.textContent = wynik;
}