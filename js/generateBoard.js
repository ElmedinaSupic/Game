$(document).ready(function() {
  let a = 0;
  const board = _initBoard();
  let moves = 225;
  const color = ['white', 'black'];
  //generating board
  for (let i = 0; i < 15; i++) {
    $(".game").append('<tr class="row row' + i + '"></tr>');
    for (let j = 0; j < 15; j++) {
      $('.row' + i).append(`<td class="column ${i} ${j}"></td>`);
    }
  }
  $(".column").on('click', function(e) {
    const [, row, col] = $(this).attr('class').split(' ');
    console.log('Row,Col: ', row, col);
    moves--;
    if (a % 2 === 0) {
      $(this).css("background-color", "black");
      board[row][col] = 'black';
      a = 1;
    } else {
      $(this).css("background-color", "white");
      board[row][col] = 'white';
      a = 0;
    }
    var styles = {
      width: "30px",
      height: "30px",
      margin: "0",
      "border-radius": "50%",
      "border": "1px solid black",
    };
    $(this).css(styles);
    $(this).unbind('click');
    if (checkWinner(board, color[a])) {
      alert(`Winner is: ${color[a]}`);
      //nema klikanja kad game zavrsi
      $('.game').find('*').off();
    } else if (moves === 0) {
      alert('It\'s a draw');
    }
  });
});