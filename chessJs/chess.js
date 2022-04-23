const BoardSize=8;
let selectedCell;
let table;

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
function checkPlace(coulmn){
  if(coulmn===1 || coulmn===6)
  return "horse";
  else if(coulmn===2 || coulmn===5)
  return 'bishop';
  else if (coulmn===0 || coulmn===7)
  return 'rook';
  else if (coulmn===3)
  return 'queen';
  else if (coulmn===4)
  return 'king';
}
function possiblemoves(pieceType,position){
  rowPos=position[0]
  columnPos=position[2]
  if (pieceType==='<img src="./chesselement/black pawn.png">') {
    (rowPos++)
    let cellsmove =document.getElementById(String(rowPos)+` `+columnPos);
    cellsmove.classList.add('cellsmove')
    console.log(cellsmove)} 
  else if (pieceType==='<img src="./chesselement/white pawn.png">') {
    (rowPos--)
    let cellsmove =document.getElementById(String(rowPos)+` `+columnPos);
    cellsmove.classList.add('cellsmove')
  }
  else if (pieceType==='<img src="./chesselement/black rook.png">'||
  pieceType==='<img src="./chesselement/white rook.png">') {
    for (let i = 0; i < 8; i++) {
     rowPos=i;
     let cellsmove =document.getElementById(String(rowPos)+` `+columnPos);
     cellsmove.classList.add('cellsmove')
    }
    for (let j = 0; j < 8; j++) {
     columnPos=j;
     rowPos=position[0]
     let cellsmove =document.getElementById(String(rowPos)+` `+columnPos);
     cellsmove.classList.add('cellsmove')

    // }}
    // else if (pieceType==='<img src="./chesselement/white bishop.png">') {
    //   if ((rowPos+columnPos)%2==0) {
    //   let cellsmove =document.getElementById(String(rowPos)+` `+columnPos);
    //   cellsmove.classList.add('cellsmove')
    // }}
  }}}


function onCellClick(event) {
  if (selectedCell !== undefined) {
    selectedCell.classList.remove('selected');  
  }
  selectedCell = event.currentTarget;
  selectedCell.classList.add('selected');
  let pieceType=selectedCell.innerHTML
  let position=(selectedCell.id)    
  possiblemoves(pieceType,position)
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
