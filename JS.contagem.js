function contar() {
    let ini = document.getElementById('txtn1')
    let fim = document.getElementById('txtn2')
    let passo = document.getElementById('txtn3')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert ('[ERRO]Faltam dados!')
    }  else { 
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
        for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} &#128073 ` }
        
        } else {
        for (let c = i; c >= f; c-= p) {
        res.innerHTML += ` ${c} &#128073 `
    
       }
      }

      res.innerHTML += ` &#9872 `
    }
}