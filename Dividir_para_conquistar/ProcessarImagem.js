importScripts("filtros.js");

self.onmessage = function (e) {
    var canvasData = e.data.data;
    var internoImg = canvasData.data;
    
    var l = e.data.length;
    var cdx = e.data.cdx;

    processaPeB(internoImg, l);

    self.postMessage({ result: canvasData, cdx: cdx });
};
