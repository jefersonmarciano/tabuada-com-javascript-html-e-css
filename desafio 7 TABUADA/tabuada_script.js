function Tabuada(){
    let num= window.document.getElementById('num')
    let end = document.getElementById('end')
    if(num.value.length == 0 || end.value.length == 0){

        window.alert("[ERRO] Confira os dados")

    }
    else{
        let n = Number(num.value)
        let e = Number(end.value)
        let x = 0
        let r = '' // variavael vazia
        let res = window.document.getElementById('resposta')
        res.innerHTML = `A tabuada dp ${n} é: <br>`
            
        do{
            r = n*x
            res.innerHTML += `${x} x ${n} = ${r} <br>` // vai adiconar novos itens no html e nao trocar
            x++
        } while (x <= e)
        
     }
    
}