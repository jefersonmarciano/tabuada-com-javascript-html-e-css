function presente ( dinheiro, valor){
    if(dinheiro < valor){
        return 'nao da para comprar'
    }
    else {
        return 'Você realmente precisa fazer essa compra?'
    }
}

let x = presente(100, 90)
console.log(x)
