var button = document.getElementById('botao')
var res = document.querySelector('#resultado')

button.addEventListener('click', () => {
    var symbols
    var coins = document.querySelector('#coins').value
    var valorEmReal = document.getElementById('real').value

    if(coins == "dolar"){
        var dolar = 5.06
        var symbols = "US$"
        var valorEmReal = valorEmReal / dolar
    }else if (coins == 'euro'){
        var euro = 5.54
        var symbols = "€"
        var valorEmReal = valorEmReal / euro
    }else if(coins == 'iene'){
        var iene = 0.039
        var symbols = "¥"
        var valorEmReal = valorEmReal / iene
    }

    var changeValue = valorEmReal.toFixed(2).replace(".", ",")
    res.innerHTML = `Resultado:<br><br>${symbols} ${changeValue}`
})