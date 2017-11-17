var counter = 0;
self.onmessage = function(message){
	counter++;
	self.postMessage(counter);
}
