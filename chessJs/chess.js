const BoardSize=8;
class Piece{
  constructor(color,Type,place,cell){

    this.color =color; 
    this.type=Type
    this.place=place
     this.image=  document.createElement("img")
    this.image.src=`./chesselement/${this.color} ${this.type}.png`
     cell.appendChild(this.image);
     this.cell=cell;



  }
}  
function checkPalce(coulmn){
if(coulmn===1 || coulmn===6)
return "horse"
else if(coulmn===2 || coulmn===5)
return 'bishop'
else if (coulmn===0 || coulmn===7)
return 'rook'
else if (coulmn===3)
return 'queen'
else if (coulmn===4)
return 'king'
}



function checkPieceWhite(column,cell){
const type=checkPalce(column)
new Piece("white",type,[7,column],cell);
}
function checkPieceBlack(column,cell){
  const type=checkPalce(column)
  new Piece("black",type,[7,column],cell);
}
 const table= document.createElement("table");
function createBoard(){
  for (let i=0;i<BoardSize;i++){
    const row =table.insertRow();
    for(let j=0;j<BoardSize;j++){
      const cell=row.insertCell();
      cell.id="cell-"+i.toString()+"_"+j.toString();
      if((i+j)%2==0){
        cell.classList.add("dark-cell")
      } else{
        cell.className='light-cell';
      }
      if(i===6){
        new Piece('white','pawn',[i,j],cell)
      } 
      if(i===1)
        new Piece('black','pawn',[i,j],cell)
        if(i===0)
        checkPieceBlack(j,cell)
        if(i===7)
        checkPieceWhite(j,cell)
      }
      }
    }
  document.body.appendChild(table);
table.className = "table1"

function pullimg(cell,color,type){
  const image= document.createElement("img")
  image.src="chesselement/"+color+ type+'.png';
  cell.appendChild(image);
}
createBoard();

