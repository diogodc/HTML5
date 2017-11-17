findPrime = function(n){
		for (var i = 2; i <= n-1; i+=1){
			if(n % i == 0){
				return (false);
			}
		}
		return(true);
}	  

self.onmessage = function(event){
	var num = parseInt(event.data.num) ;
	self.postMessage(findPrime(num));
}
