"use strict";

(function () {

    var source = document.getElementById("source");

    source.onload = function () {
        var inicio = new Date();

        var canvas = document.getElementById("target");
        canvas.width = source.clientWidth;
        canvas.height = source.clientHeight;

        var tempContext = canvas.getContext("2d");
        var len = canvas.width * canvas.height * 4;

        tempContext.drawImage(source, 0, 0, canvas.width, canvas.height);

        var workersQtd = 4;
        var finalizados = 0;
        var tamanhoSegmento = len / workersQtd;
        var tamanhoBloco = canvas.height / workersQtd;

        var onWorkEnded = function (e) {
            var canvasData = e.data.result;
            var cdx = e.data.cdx;

            tempContext.putImageData(canvasData, 0, tamanhoBloco * cdx);

            finalizados++;

            if (finalizados == workersQtd) {
                var contagemTempo = new Date() - inicio;
                logmensagem.innerHTML = "Processado em " + contagemTempo + " ms!";
            }
        };

        for (var cdx = 0; cdx < workersQtd; cdx++) {
            var worker = new Worker("ProcessarImagem.js");
            worker.onmessage = onWorkEnded;

            var canvasData = tempContext.getImageData(0, tamanhoBloco * cdx, canvas.width, tamanhoBloco);
            worker.postMessage({ data: canvasData, cdx: cdx, length: tamanhoSegmento });
        }
    };

    source.src = "imagem16K.jpg";
})();



