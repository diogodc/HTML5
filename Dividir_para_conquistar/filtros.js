var processaPeB = function (internoImg, l) {
         for(var i=0; i < l; i+=4){
            var red   = internoImg[i];
            var green = internoImg[i+1];
            var blue  = internoImg[i+2];
            var alpha = internoImg[i+3];
            var bw = (red+green+blue)/3;
            internoImg[i] = bw;
            internoImg[i+1] = bw;
            internoImg[i+2] = bw;
            internoImg[i+3] = 1*alpha;
    } //for
};
