/*
  Funkcija za inicijalizaciju matrice 15x15 za igru
*/
function _initBoard() {
  const board = [];
  for (let i = 0; i < 15; i++) {
    board.push([]);
    for (let j = 0; j < 15; j++)
      board[i].push('');
  }
  return board;
}
/*
  Funkcija za provjeru da li ima pobjednika po potezu,
  proslijedjuje joj se matrica i boja igraca koji je odigrao.
  Provjera je podijeljenja u 3 dijela
  - 1) Lijevi dio kad je pozicija kruzica manja od 4 ,
      tj ne moze gledati dijagonalno lijevo
      1.1) Za lijevi dio za poziciju manju od 11 po redu,
          da pregleda vertikalno 5 u nizu , horizontalno i dijagonalno desno
      1.2) za lijevi dio za poziciju vecu od 11 po redu,
          da pregleda samo horizontalno jer ne moze pregledati vertikalno i dijagonalno
          izasao bi van granica matrice pa nema smisla to radit.
  - 2) Analogno za desni dio kad je na pozicij vecoj od 11
  - 3) Srednji dio kad je izmedju 4 i 11 pa moze gledati i dijagonalno (i lijevo i desno) ,
  vertikalno i horizontalno
*/
function checkWinner(board, color) {
  for (let i = 0; i < 15; i++)
    for (let j = 0; j < 15; j++) {
      //lijeva polovina
      if (j < 4) {
        //lijevi dio ,za poziciju manju od 11
        if (i < 11) {
          if (checkVertical(board, color, i, j))
            return true;
          if (checkHorizontal(board, color, i, j))
            return true;
          if (checkDiagRight(board, color, i, j))
            return true;
        } //donji lijevi,za poziciju od 11
        else if (i > 10) {
          if (checkHorizontal(board, color, i, j))
            return true;
        }
      } else if (j > 10) {
        //gornjiu desni
        if (i < 11) {
          if (checkVertical(board, color, i, j))
            return true;
          if (checkDiagLeft(board, color, i, j))
            return true;
        }
        //srednji dio
      } else {
        //gornjiu
        if (i < 11) {
          if (checkVertical(board, color, i, j))
            return true;
          if (checkHorizontal(board, color, i, j))
            return true;
          if (checkDiagRight(board, color, i, j))
            return true;
          if (checkDiagLeft(board, color, i, j))
            return true;
        } //donji
        else if (i > 10) {
          if (checkHorizontal(board, color, i, j))
            return true;
        }
      }
    }
  return false;
}

//Iz prethodne funkcije ocigledno je sta ovdje radi i kako pregleda i naredne funkcije
function checkVertical(board, color, row, col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row + i][col] === color) {
      counter++;
    }
  }
  if (counter === 5)
    return true;
  return false;
}

function checkHorizontal(board, color, row, col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row][col + i] === color) {
      counter++;
    }
  }
  if (counter === 5)
    return true;
  return false;
}

function checkDiagRight(board, color, row, col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row + i][col + i] === color) {
      counter++;
    }
  }
  if (counter === 5)
    return true;
  return false;
}

function checkDiagLeft(board, color, row, col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row + i][col - i] === color) {
      counter++;
    }
  }
  if (counter === 5)
    return true;
  return false;
}