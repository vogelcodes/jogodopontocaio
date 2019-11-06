function createGame(cols, rows, containerId) {
  //creates objects for game
  let container = document.getElementById(containerId);
  let htmlBuilder = "";
  let cell = "cell";
  let hline = "hline";
  let vline = "vline";
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
            '<div id="hline-' +
            h +
            "x" +
            linha +
            '" class="hline" onclick="handleClick(' +
            h +
            ", " +
            linha +
            ', 1)" ></div>';
        }
      }

      if (linha < rows) {
        // monta linhas verticais e celulas, somente se não for a ultima linha
        for (let h = 1; h <= cols; h++) {
          htmlBuilder +=
            '<div id="vline-' +
            h +
            "x" +
            linha +
            '" class="vline' +
            (h == 1 ? " clear" : "") +
            '" onclick="handleClick(' +
            h +
            ", " +
            linha +
            ', 2)" ></div>';
          if (h < cols) {
            htmlBuilder +=
              '<div id="cell-' +
              h +
              "x" +
              linha +
              '" class="cell" onclick="handleClick(' +
              h +
              ", " +
              linha +
              ', 3)" ></div>';
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
function handleClick(h, l, type) {
  let id = "";
  if (type == 1) {
    id = `hline-${h}x${l}`;
    document.getElementById(id).classList.add("active");
  }
  if (type == 2) {
    id = `vline-${h}x${l}`;
    document.getElementById(id).classList.add("active");
  }
  console.log("You clicked", h, l, type);
}
