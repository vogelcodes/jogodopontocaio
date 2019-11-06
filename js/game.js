function createGame(cols, rows, containerId) {
  //creates objects for game
  let container = document.getElementById(containerId);
  let htmlBuilder = "";
  if (container) {
    for (let linha = 1; linha <= rows; linha++) {
      // monta pontos e linhas horizontais
      for (let h = 1; h <= cols; h++) {
        htmlBuilder +=
          '<div name="point-' +
          h +
          "x" +
          linha +
          '" class="point' +
          (h == 1 ? " clear" : "") +
          '"></div>';

        if (h < cols) {
          htmlBuilder +=
            '<div name="hline-' +
            h +
            "x" +
            linha +
            "-" +
            (h + 1) +
            "x" +
            linha +
            '" class="hline"></div>';
        }
      }

      if (linha < rows) {
        // monta linhas verticais e celulas, somente se não for a ultima linha
        for (let h = 1; h <= cols; h++) {
          htmlBuilder +=
            '<div name="vline-' +
            h +
            "x" +
            linha +
            "-" +
            h +
            "x" +
            (linha + 1) +
            '" class="vline' +
            (h == 1 ? " clear" : "") +
            '"></div>';
          if (h < cols) {
            htmlBuilder +=
              '<div id="cell-' + h + "x" + linha + '" class="cell" ></div>';
          }
        }
      }
    }

    container.innerHTML = htmlBuilder;
  }
}
function markSquare(c, l, pl) {
  var id = `cell-${c}x${l}`;
  var sq = document.getElementById(id);
  sq.classList.add(pl);
}
