let all = document.querySelectorAll('*');
for (let i=0;i<all.length;i++) {
  var ele = all[i];
  ele.style.margin = '0px';
  ele.style.padding = '0px';
  ele.style.fontFamily = "'poppins', sans-serif";
  ele.style.color = "rgb(132, 30, 233)";
}

document.body.style.backgroundColor = 'light';
let mc = document.createElement('div');
let cont = document.createElement('div');
mc.style.display = cont.style.display = 'flex';
mc.style.alignItems = cont.style.alignItems = 'center';
mc.style.justifyContent = cont.style.justifyContent = 'center';
mc.style.flexDirection = 'column';
cont.marginBottom = '10px';


let title = document.createElement('h1');
title.textContent = 'TIC TAC TOE';
title.style.margin = '16px 0px 10px';
title.style.fontSize = '2rem';

let turn = document.createElement('p');
turn.id='turn';
turn.style.fontSize = '20px';

let grid = document.createElement('div');
grid.style.display = 'grid';
grid.style.backgroundColor = '#272727';
grid.style.padding = '10px';
grid.style.borderRadius = '5px';
grid.style.gap = '1px';
grid.style.marginTop = '50px';
grid.style.gridTemplateColumns = "auto auto auto";
mc.appendChild(title);
mc.appendChild(turn);
mc.appendChild(cont);

for(let i=0;i<9;i++){
    let b = document.createElement('input');
    b.type = 'text';
    b.onclick = (e)=>{
        put(e)
    };
    b.style.border = '.5px solid white';
    b.style.borderRadius = '5px';
    b.style.outline = 'none';
    b.style.backgroundColor = '#272727'
    b.style.height = '100px';
    b.style.cursor = 'pointer';
    b.style.textAlign = 'center';
    b.style.fontSize = '2rem';
    b.style.width = '100px';
    b.style.color = "white";
    b.style.margin = '1px';
    grid.appendChild(b);
}

cont.appendChild(grid);
document.body.appendChild(mc);

let Congrats = document.createElement('div');
let tit2 = document.createElement('h1');
tit2.textContent = 'TIC TAC TOE';
Congrats.appendChild(tit2);
Congrats.style.width = '100%';
Congrats.style.height = '100vh';
Congrats.style.boxSizing = 'border-box';
Congrats.style.position = 'fixed';
Congrats.style.left = 0;
Congrats.style.top = 0;
Congrats.style.backgroundColor = '#272727';
Congrats.style.visibility = 'hidden';
Congrats.style.display = 'flex';
Congrats.style.flexDirection = 'column';
Congrats.style.alignItems = 'center';
Congrats.style.justifyContent = 'center';
Congrats.id = 'Congrats';
let card = document.createElement('div');
card.style.width = '20vw';
card.style.height = '20vw';
card.style.borderRadius = '15px';
card.style.backgroundColor = 'black';
card.style.display = 'flex';
card.style.flexDirection = 'column';
card.style.alignItems = 'center';
card.style.justifyContent = 'center';
Congrats.appendChild(card);
let h2 = document.createElement('h2');
h2.id = 'res';
card.appendChild(h2);
let btn = document.createElement('button');
btn.id = 'rsbtn';
btn.textContent = 'Restart';
btn.onclick = () =>{
    restart();
}
card.appendChild(btn);
h2.style,marginBottom = '40px';
btn.style.padding = '10px 20px';
btn.style.borderRadius = '20px';
btn.style.border = 'none';
btn.style.backgroundColor = "rgb(132, 30, 233)";
btn.style.color = 'white';
btn.style.cursor = 'pointer';
document.body.appendChild(Congrats);
let flag = 'O';
let bc = 0;
function congratulate(flag){
    if(flag=='T') document.getElementById('res').textContent = "It's a tie";
    else document.getElementById('res').textContent = flag+' won';
    document.getElementById('Congrats').style.visibility = 'visible';
}
function validate(e){
    bc++;
    let blist = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [3, 4, 5], [2, 5, 8], [6, 7, 8]];
    let ind  = Array.from(e.parentNode.children).indexOf(e);
    let f = e.value;
    for(let i=0;i<blist.length;i++){
        if(blist[i].includes(ind)){
            let c = 1;
            for(let j=0;j<3;j++) if(Array.from(e.parentNode.children)[blist[i][j]].value!=f) c=0;
            if(c==1) {
                congratulate(f);
                return;
            }
        }
    }
    if(bc==9) congratulate('T');
}
function updateturn(){
    document.getElementById('turn').textContent = flag+"'s turn";
}
function put(e){
    e.target.value = flag;
    e.target.disabled = true;
    flag = (flag=='O')?'X':'O';
    validate(e.target);
    updateturn();
}
updateturn();
function restart(){
    document.getElementById('res').textContent = '';
    bc=0;
    let e = grid;
    for(let i=0;i<9;i++){
        let ele = Array.from(e.children)[i];
        ele.disabled = false;
        ele.value = '';
    }
    flag = 'O';
    updateturn();
    document.getElementById('Congrats').style.visibility = 'hidden';
}