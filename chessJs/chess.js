const BoardSize=8;
let selectedCell;
let table;

function getBishopMoves(row,col){
 for(let i=0;i<BoardSize;i++){
    // back
    drawCellsMove(+row+i,+col+i);
    drawCellsMove(+row-i,+col-i);
    drawCellsMove(+row+i,+col-i);
    drawCellsMove(+row-i,+col+i);

 }

}

function getQueenMoves(row,col){
  getRookMoves(row,col);
  getBishopMoves(row,col);
}

function getKingMoves(row,col){
    drawCellsMove(+row+1,+col);
    drawCellsMove(+row-1,+col);
    drawCellsMove(+row+1,+col+1);
    drawCellsMove(+row+1,+col-1);

    drawCellsMove(+row,+col+1);
    drawCellsMove(+row,+col-1);
    drawCellsMove(+row-1,+col-1);
    drawCellsMove(+row-1,+col+1);
}

function getRookMoves(row,col){
  for (let i = 0; i < 8; i++) {

    drawCellsMove(+row+i,+col);
    drawCellsMove(+row-i,+col);
    drawCellsMove(+row,+col+i);
    drawCellsMove(+row,+col-i);
   }
 
}

function getKnightMoves(row,col){
  drawCellsMove(+row+2,+col+1);
  drawCellsMove(+row+2,+col-1);
  drawCellsMove(+row+1,+col+2);
  drawCellsMove(+row+1,+col-2);
  drawCellsMove(+row-2,+col+1);
  drawCellsMove(+row-2,+col-1);
  drawCellsMove(+row-1,+col+2);
  drawCellsMove(+row-1,+col-2);
  
}

class BoardData {
  constructor(pieces) {
    this.pieces = pieces;
   
  }
}
class Piece{
  constructor(color,Type,place,cell){
    this.color =color; 
    this.type=Type
    this.place=place
     this.image=  document.createElement("img")
    this.image.src=`./chesselement/${this.color} ${this.type}.png`
    this.image.setAttribute('type',this.type);
    this.image.setAttribute('color',this.color);
     cell.appendChild(this.image);
     this.cell=cell;
     
  }
  
  }
function checkPlace(coulmn){
  if(coulmn===1 || coulmn===6)
  return "knight";
  else if(coulmn===2 || coulmn===5)
  return 'bishop';
  else if (coulmn===0 || coulmn===7)
  return 'rook';
  else if (coulmn===3)
  return 'queen';
  else if (coulmn===4)
  return 'king';
}

function pieceMoves(piece){
  switch(piece){

    
  }
}

function drawCellsMove(rowPos,columnPos){
  let cellsmove =document.getElementById(String(rowPos)+` `+columnPos);
  if(cellsmove){
    cellsmove.classList.add('cellsmove')
  }
 
}


function possiblemoves(piece,position){
  console.log(piece)
  rowPos=position[0]
  columnPos=position[2]
  if (piece.type==='pawn' && piece.color==='black') {
    (rowPos++)
    drawCellsMove(rowPos,columnPos)
    console.log(cellsmove)} 
  else if (piece.type==='pawn' && piece.color==='white') {
    (rowPos--)
    drawCellsMove(rowPos,columnPos)
  }
  else if(piece.type ==='bishop'){
    getBishopMoves(rowPos,columnPos)
  }
  else if(piece.type==='knight'){
    getKnightMoves(rowPos,columnPos);
  }
  else if (piece.type==='rook') {
    getRookMoves(rowPos,columnPos);
   }
   else if (piece.type==='king'){
    getKingMoves(rowPos,columnPos);
   } 
   else if(piece.type==='queen'){
     getQueenMoves(rowPos,columnPos);
   }
  }

function removeAllMoves(){
  document.querySelectorAll('table tr td.cellsmove').forEach((cell)=>{
    cell.classList.remove('cellsmove');
});
}
function onCellClick(event) {
  removeAllMoves();
  if (selectedCell !== undefined) {
    selectedCell.classList.remove('selected');  
  }
  selectedCell = event.currentTarget;
  selectedCell.classList.add('selected');
  let pieceType=selectedCell.firstChild.getAttribute('type')
  let color =selectedCell.firstChild.getAttribute('color')
  let piece = {
    type:pieceType,
    color:color
  }
  let position=(selectedCell.id)
  possiblemoves(piece,position)
}




function checkPieceWhite(column,cell){
const type=checkPlace(column)
new Piece("white",type,[7,column],cell);
}
function checkPieceBlack(column,cell){
  const type=checkPlace(column)
  new Piece("black",type,[0,column],cell);
}
 table= document.createElement("table");
function createBoard(){
  for (let i=0;i<BoardSize;i++){
    const row =table.insertRow();
    for(let j=0;j<BoardSize;j++){
      const cell=row.insertCell();
      cell.id=i.toString()+" "+j.toString();
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
        checkPieceBlack(j,cell);
        if(i===7)
        checkPieceWhite(j,cell);
        cell.addEventListener('click',()=>console.log(cell.id));
        cell.addEventListener('click', onCellClick);

      }
      }
    }
   
  document.body.appendChild(table);
table.className = "table1"


createBoard();
