function isCheckmate(color) {
  const king = Array.from(document.querySelectorAll(".piece")).find(
    (piece) => piece.dataset.type === "Rey" && piece.dataset.color === color
  )
  const kingX = parseInt(king.parentElement.dataset.x, 10)
  const kingY = parseInt(king.parentElement.dataset.y, 10)

  // Verificar si el rey está en jaque
  if (!isKingInCheck(color)) {
    return false // El rey no está en jaque, por lo que no puede haber jaque mate
  }

  // Verificar si el rey puede escapar del jaque moviéndose a una casilla segura
  for (let i = kingX - 1; i <= kingX + 1; i++) {
    for (let j = kingY - 1; j <= kingY + 1; j++) {
      if (i >= 0 && i < 8 && j >= 0 && j < 8) {
        // Asegurarse que las coordenadas están dentro de los límites del tablero
        const targetSquare = document.querySelector(
          `[data-x="${i}"][data-y="${j}"]`
        )
        if (targetSquare && isValidMove("Rey", color, kingX, kingY, i, j)) {
          const originalParent = king.parentElement
          targetSquare.appendChild(king)
          if (!isKingInCheck(color)) {
            originalParent.appendChild(king)
            return false // El rey puede moverse a una casilla segura, no hay jaque mate
          }
          originalParent.appendChild(king)
        }
      }
    }
  }

  // Verificar si alguna pieza puede capturar a la pieza que amenaza al rey
  const opponentColor = color === "white" ? "black" : "white"
  const opponentPieces = Array.from(document.querySelectorAll(".piece")).filter(
    (piece) => piece.dataset.color === opponentColor
  )
  for (const piece of opponentPieces) {
    const fromX = parseInt(piece.parentElement.dataset.x, 10)
    const fromY = parseInt(piece.parentElement.dataset.y, 10)
    const pieceType = piece.dataset.type
    if (isValidMove(pieceType, opponentColor, fromX, fromY, kingX, kingY)) {
      // Comprueba si alguna piece del jugador actual puede previnir el "check".
      const playerPieces = Array.from(
        document.querySelectorAll(`.piece[data-color="${color}"]`)
      )
      for (const playerPiece of playerPieces) {
        const pX = parseInt(playerPiece.parentElement.dataset.x, 10)
        const pY = parseInt(playerPiece.parentElement.dataset.y, 10)
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            const targetSquare = document.querySelector(
              `[data-x="${i}"][data-y="${j}"]`
            )
            if (
              targetSquare &&
              isValidMove(playerPiece.dataset.type, color, pX, pY, i, j)
            ) {
              const originalParent = playerPiece.parentElement
              targetSquare.appendChild(playerPiece)
              if (!isKingInCheck(color)) {
                originalParent.appendChild(playerPiece)
                return false // Una pieza ha podido prevenir el jaque, no hay jaque mate.
              }
              originalParent.appendChild(playerPiece)
            }
          }
        }
      }
    }
  }

  // Si ninguna de las condiciones anteriores se cumple, entonces el jugador está en jaque mate
  // window.alert("Jaque mate! Se ha acabado la partida.")
  console.log("Jaque mate! Se ha acabado la partida.")
  return true
}

function isKingInCheck(color) {
  const king = Array.from(document.querySelectorAll(".piece")).find(
    (piece) => piece.dataset.type === "Rey" && piece.dataset.color === color
  )
  const kingX = parseInt(king.parentElement.dataset.x, 10)
  const kingY = parseInt(king.parentElement.dataset.y, 10)

  const opponentColor = color === "white" ? "black" : "white"
  const opponentPieces = Array.from(document.querySelectorAll(".piece")).filter(
    (piece) => piece.dataset.color === opponentColor
  )

  for (const piece of opponentPieces) {
    const fromX = parseInt(piece.parentElement.dataset.x, 10)
    const fromY = parseInt(piece.parentElement.dataset.y, 10)
    if (
      isValidMove(piece.dataset.type, opponentColor, fromX, fromY, kingX, kingY)
    ) {
      king.classList.add(color === "white" ? "checkW" : "checkB")
      return true
    }
  }
  king.classList.remove("checkB", "checkW")
  return false
}

function movePiece(piece, targetSquare) {
  const fromX = parseInt(piece.parentElement.dataset.x, 10)
  const fromY = parseInt(piece.parentElement.dataset.y, 10)
  const type = piece.dataset.type
  const color = piece.dataset.color
  const toX = parseInt(targetSquare.dataset.x, 10)
  const toY = parseInt(targetSquare.dataset.y, 10)

  if (isValidMove(type, color, fromX, fromY, toX, toY)) {
    const originalSquare = piece.parentElement
    targetSquare.appendChild(piece)

    if (isKingInCheck(color)) {
      originalSquare.appendChild(piece)
      return
    }

    historialMove(piece, targetSquare)
    whiteTurn = !whiteTurn
    updateTurnIndicator()
    rotatePieces()
    piece.classList.remove("selected")
    selectedPiece = null

    // Verificar jaque mate después del movimiento del jugador actual
    const opponentColor = color === "white" ? "black" : "white"
    if (isCheckmate(opponentColor)) {
      // Aquí puedes agregar la lógica para manejar el jaque mate, por ejemplo, mostrar un mensaje de fin de juego
      window.alert("Jaque mate! El juego ha terminado.")
      console.log("Jaque mate! El juego ha terminado.")
    }
  }
}
