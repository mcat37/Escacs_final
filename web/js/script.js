//creacion inicial del juego ((tablero, piezas))

document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById("chessboard");
    const newGame = document.getElementById("new-game");
    const historialLeft = document.getElementById('left-historial');
    const historialRight = document.getElementById('right-historial');
    const pieces = { //creacion de las piezas 
        Rey: "♔",
        Reina: "♕",
        Torre: "♖",
        Alfil: "♗",
        Caballo: "♘",
        Peón: "♙",
    };
    
    
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    function createBoard() { 
        // Creación del tablero
        for (let i = 0; i < 8; i++) {
            const row = document.createElement("div");
            row.classList.add(i % 2 === 0 ? 'row-even' : 'row-odd');
            for (let j = 0; j < 8; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.dataset.x = j;
                square.dataset.y = i;
                square.dataset.l = letters[j];
                square.dataset.n = numbers[i];
                square.addEventListener('dragover', allowDrop);
                square.addEventListener('drop', drop);
                // Agregar letras a la primera fila de cuadrados
                if (i === 0) {
                    const letter = document.createElement("div");
                    letter.textContent = letters[j];
                    letter.classList.add("letter");
                    square.appendChild(letter);
                }
                if (j === 0) {
                    const number = document.createElement("div");
                    number.textContent = numbers[i];
                    number.classList.add("number");
                    square.appendChild(number);
                }
                row.appendChild(square);
            }
            chessboard.appendChild(row);
        }
    }

    function placePieces() {
        const initialSetup = [
            ["Torre", "Caballo", "Alfil", "Reina", "Rey", "Alfil", "Caballo", "Torre"],
            ["Peón", "Peón", "Peón", "Peón", "Peón", "Peón", "Peón", "Peón"],
            [],
            [],
            [],
            [],
            ["Peón", "Peón", "Peón", "Peón", "Peón", "Peón", "Peón", "Peón"],
            ["Torre", "Caballo", "Alfil", "Reina", "Rey", "Alfil", "Caballo", "Torre"],
        ];
        
        for (let i = 0; i < initialSetup.length; i++) {
            for (let j = 0; j < initialSetup[i].length; j++) {
                if (initialSetup[i][j]) {
                    const piece = document.createElement("div");
                    piece.textContent = pieces[initialSetup[i][j]];
                    piece.classList.add("piece");
                    piece.id = 'rotated';
                    piece.dataset.type = initialSetup[i][j];
                    piece.dataset.color = i < 2 ? "white" : "black";
                    piece.setAttribute('draggable', true);
                    piece.addEventListener('dragstart', dragStart);
                    piece.addEventListener('dragend', dragEnd);
                    
                    chessboard.children[i].children[j].appendChild(piece);
                }
            }
        }
    }

    createBoard();
    placePieces();
    



// document.addEventListener("DOMContentLoaded", () => {
    // funciones activas para el juego 
    newGame.addEventListener("click", () => {
        chessboard.innerHTML = "";
        historialLeft.textContent = ""; //revisar
        historialRight.textContent = ""; //revisar
        // falta poner aqui el reinico del timer
        createBoard();
        placePieces();
        whiteTurn = true;
        updateTurnIndicator();
        num = 1;
        chessboard.style.transform = "rotate(-90deg)";
        
    });


    var num = 1;
    let selectedPiece = null;
    let whiteTurn = true;
    //const chessboard = document.getElementById("chessboard");
    const turnIndicator = document.getElementById('turn-indicator');
    
    function isPieceTurn(piece) {
        const pieceColor = piece.dataset.color;
        return (whiteTurn && pieceColor === 'white') || (!whiteTurn && pieceColor === 'black');
    }

    //seleccion de pieza
    
    function selectPiece(event) {
        const target = event.target;
        //seleccion de la pieza al pulsar en ella 
        if (target.classList.contains("piece") && isPieceTurn(target)) {
            if (selectedPiece) {
                selectedPiece.classList.remove("selected");

            }
            selectedPiece = target;
            selectedPiece.classList.add("selected");
        }
        
        //si la pieza seleccionada pulsa un espacio con cuadrado
        else if (selectedPiece && target.classList.contains("square")){
            movePiece(selectedPiece, target);
        }
        
        //condicion para mover la pieza y en el cuadrado hay una pieza enemiga
        else if (selectedPiece && target.classList.contains("piece") && !isPieceTurn(target)){ 
            //Eliminar la pieza en la casilla objetivo y se mueve a ella
            const targetSquare = target.parentElement;
            //if(isValidMove(selectedPiece, targetSquare)){
                //solucion por IA 
                if(isValidMove(selectedPiece.dataset.type, selectedPiece.dataset.color, parseInt(selectedPiece.parentElement.dataset.x, 10), parseInt(selectedPiece.parentElement.dataset.y, 10), parseInt(targetSquare.dataset.x, 10), parseInt(targetSquare.dataset.y, 10))){
                    movePiece(selectedPiece, targetSquare);
                    target.remove();
                    if (!isKingInCheck);
                    movePiece(selectedPiece, targetSquare);
                    
                }
                else{
                    selectedPiece.classList.remove("selected");
                } 
            }
    }
// funciones para arrastrar y soltar
    function allowDrop(event) {
        event.preventDefault();
    }
    function dragStart(event) {
        if (isPieceTurn(event.target)) {
            selectedPiece = event.target;
            event.dataTransfer.setData("text/plain", event.target.dataset.type);
        } else {
            event.preventDefault();
        }
    }
    function drop(event) {
        event.preventDefault();
        const targetSquare = event.target;
        if (selectedPiece && targetSquare.classList.contains('square')) {
            movePiece(selectedPiece, targetSquare);
        }
        else if (selectedPiece && targetSquare.classList.contains("piece") && !isPieceTurn(targetSquare)){ 
            //Eliminar la pieza en la casilla objetivo y se mueve a ella
            const targetSquare = event.target.parentElement;
            //solucion por IA 
            if(isValidMove(selectedPiece.dataset.type, selectedPiece.dataset.color, parseInt(selectedPiece.parentElement.dataset.x, 10), parseInt(selectedPiece.parentElement.dataset.y, 10), parseInt(targetSquare.dataset.x, 10), parseInt(targetSquare.dataset.y, 10))){
                movePiece(selectedPiece, targetSquare);
                event.target.remove();
                    movePiece(selectedPiece, targetSquare);
  
                
            }
            else{
                selectedPiece.classList.remove("selected");
            }    
        }
    }
    function dragEnd(event) {
        // event.target.style.opacity = "1";
        // event.target.classList.remove('hide');
        event.target.classList.remove("selected");
        selectedPiece = null;
        
    }

    function historialMove(selectedPiece,targetSquare){
        const piece = selectedPiece.dataset.type;
        //const numbers = selectedPiece.parentElement.dataset.n; //en caso de querer saber desde donde viene la pieza
        //const letters = selectedPiece.parentElement.dataset.l; //en caso de ver desde donde viene la pieza
        const toL = targetSquare.dataset.l;
        const toN = targetSquare.dataset.n;
        
        //meter en una database lo siguiente para que quede guardado y luego sacarlo por pantalla
        //de manera temporal lo haremos así para ver que funciona
        if (whiteTurn) {
                const historialText = num + '. ' + piece.toUpperCase().charAt(0)+ toL + toN;
                //insert into partida where id='id partida'(peça, de, a) values (?,?,?)
                 //piece tol toN{id}
                 
                const historialUndo =  historialLeft.textContent.split('\n');
                historialUndo.push(historialText)
                historialLeft.textContent = historialUndo.join('\n');
            }
        else{
            const historialText = num + '. ' + piece.toUpperCase().charAt(0)+ toL + toN;
            const historialUndo =  historialRight.textContent.split('\n');
            historialUndo.push(historialText);
            historialRight.textContent = historialUndo.join('\n');

        }
        num ++;
    }

    function movePiece(piece, targetSquare) {
        const fromX = parseInt(piece.parentElement.dataset.x, 10);
        const fromY = parseInt(piece.parentElement.dataset.y, 10);
        const type = piece.dataset.type;
        const color = piece.dataset.color;
        const toX = parseInt(targetSquare.dataset.x, 10);
        const toY = parseInt(targetSquare.dataset.y, 10);
        
        if (isValidMove(type, color, fromX, fromY, toX, toY)) {
            const original = piece.parentElement;
            targetSquare.appendChild(piece);

            // el rey esta en Check?
            if (isKingInCheck(color)) {
                rey = piece.getAttribute("data-type") === "Rey";
                piece.classList.add("check");
                // revierte el movimiento siempre que el rey este peligro
                original.appendChild(piece);
                return;
                
            }
            historialMove(piece, targetSquare);
            whiteTurn = !whiteTurn;
            updateTurnIndicator();
            rotatePieces();
            piece.classList.remove("selected");
            playTimer();
            selectedPiece = null;
            console.log(fromX, fromY, toX, toY);
            
        }
    }

    function isValidMove(type, color, fromX, fromY, toX, toY) {
        
        const minX = Math.min(fromX, toX);
        const maxX = Math.max(fromX, toX);
        const minY = Math.min(fromY, toY);
        const maxY = Math.max(fromY, toY);
        const xIncrement = toX > fromX ? 1 : -1;
        const yIncrement = toY > fromY ? 1 : -1;
        let x = fromX + xIncrement;
        let y = fromY + yIncrement;
        
        //hay oponente?
        const isOpponentPiece = (x, y) => {
            const piece = document.querySelector(`[data-x="${x}"][data-y="${y}"] .piece`);
            if (piece) {
                return piece.getAttribute('data-color') !== color;
            }
            return false;
        };
        //hay obstaculos en el camino ?
        const isObstacle = (x, y) => {
            const piece = document.querySelector(`[data-x="${x}"][data-y="${y}"] .piece`);
            if (piece) {
                return true;
            }
            return false;
        };
        //hay obstaculos en el camino?
        //logica basica de movimiento de las piezas
        // Falta añadir las reglas basicas
        switch (type) {
            case "Rey":
                    return Math.abs(toX - fromX) <= 1 && Math.abs(toY - fromY) <= 1;
            case "Reina":
                if(fromX === toX || fromY === toY || Math.abs(toX - fromX) === Math.abs(toY - fromY)){
                    if (fromX === toX) {
                        for (let y = minY + 1; y < maxY; y++) {
                            if (document.querySelector(`[data-x="${fromX}"][data-y="${y}"] .piece`)) {
                                return false;
                            }
                        }
                    } else if (fromY === toY) {
                        for (let x = minX + 1; x < maxX; x++) {
                            if (document.querySelector(`[data-x="${x}"][data-y="${fromY}"] .piece`)) {
                                return false;
                            }
                        }
                    } else {
                        while (x !== toX && y !== toY) {
                            if (document.querySelector(`[data-x="${x}"][data-y="${y}"] .piece`)) {
                                return false; // Hay una pieza en el camino
                            }
                            x += xIncrement;
                            y += yIncrement;
                        }
                    }
                    return true;
                }
            case "Torre":
               return fromX === toX || fromY === toY; //original

            case "Alfil":
                if (Math.abs(toX - fromX) === Math.abs(toY - fromY)) {
                    let x = fromX + xIncrement;
                    let y = fromY + yIncrement;
                    while (x !== toX && y !== toY) {
                        if (document.querySelector(`[data-x="${x}"][data-y="${y}"] .piece`)) {
                            return false; // There is a piece in the way
                        }
                        x += xIncrement;
                        y += yIncrement;
                    }
                    return true;
                }
                return false;
                //return Math.abs(toX - fromX) === Math.abs(toY - fromY);
            case "Caballo":
                return (Math.abs(toX - fromX) === 2 && Math.abs(toY - fromY) === 1) || (Math.abs(toX - fromX) === 1 && Math.abs(toY - fromY) === 2);
            case "Peón":
            if (color === "white") {
                if (toX === fromX) {
                    if (toY === fromY + 1) {
                        return !document.querySelector(`[data-x="${toX}"][data-y="${toY}"] .piece`);
                    } else if (fromY === 1 && toY === fromY + 2) {
                        return !document.querySelector(`[data-x="${toX}"][data-y="${toY}"] .piece`) && !document.querySelector(`[data-x="${toX}"][data-y="${fromY + 1}"] .piece`);
                    }
                } 
                else if((Math.abs(toX - fromX) === 1 && toY === fromY + 1) && isOpponentPiece(toX, toY)) {
                    return (Math.abs(toX - fromX) === 1 && toY === fromY + 1);
                }
            } else {
                if (toX === fromX) {
                    if (toY === fromY - 1) {
                        return !document.querySelector(`[data-x="${toX}"][data-y="${toY}"] .piece`);
                    } else if (fromY === 6 && toY === fromY - 2) {
                        return !document.querySelector(`[data-x="${toX}"][data-y="${toY}"] .piece`) && !document.querySelector(`[data-x="${toX}"][data-y="${fromY - 1}"] .piece`);
                    }
                } else if (Math.abs(toX - fromX) === 1 && toY === fromY - 1) {
                    console.log("correct");
                    return isOpponentPiece(toX, toY);
                }
            }
            return false;
        default:
            return false;
        }
    }
    function isKingInCheck(color) {
        const king = document.querySelector(`.piece[data-type="Rey"][data-color="${color}"]`);
        const kingX = parseInt(king.parentElement.dataset.x, 10);
        const kingY = parseInt(king.parentElement.dataset.y, 10);
        const opponentColor = color === "white" ? "black" : "white";
        
        const pieces = document.querySelectorAll(`.piece[data-color="${opponentColor}"]`);
        for (const piece of pieces) {
            const pieceType = piece.dataset.type;
            const fromX = parseInt(piece.parentElement.dataset.x, 10);
            const fromY = parseInt(piece.parentElement.dataset.y, 10);
            if (isValidMove(pieceType, opponentColor, fromX, fromY, kingX, kingY)) {
                return true;  //rey en jake
            }
        }
        return false;
    }
    function updateTurnIndicator() {
        turnIndicator.textContent = `Turno: ${whiteTurn ? 'Blancas' : 'Negras'}`;
    }
    function rotatePieces(){
        const allPieces = document.querySelectorAll('.piece');
        allPieces.forEach(p => {
            if (p.classList.contains('rotate')) {
                p.classList.remove('rotate');
            } else {
                p.classList.add('rotate');
            }
        });
        chessboard.style.transform = whiteTurn ? "rotate(-90deg)":"rotate(90deg)";
    }
    // updateTurnIndicator();
    chessboard.addEventListener("click", selectPiece);
    chessboard.addEventListener("dragstart", selectPiece);
    
    
    console.log("¡Comienza el juego!");// Iniciar contador para el jugador blanco
    

   
});    

// }
// );

