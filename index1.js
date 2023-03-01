// criar balao
// estourar balao
// carregar balao

let total = 0

function criaBalao(){
    let balao = document.createElement(`div`);
    balao.setAttribute(`class`, `balao`); 

    let x = Math.floor(Math.random() * 600)
    let y = Math.floor(Math.random() * 400)

    balao.setAttribute(`style`, `left:` + x + `px; top:` + y + `px;`); // é o mesmo que <div class="balao" style="left:30px; top:60px"><div>
    balao.setAttribute(`onclick`, `estouraBalao(this)`);

    document.body.appendChild(balao);
}

function estouraBalao(objeto){
    document.body.removeChild(objeto);
    total++;
    let score = document.getElementById(`total`);
    score.innerHTML = `Baloes estourados : ${total}`


}

function carregaBalao(){
    setInterval(criaBalao, 1000);
}