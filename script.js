function fibonacci(num) {
   let a = 0;
   let b = 1;
   if(num<2) return a;
	let c;
	for(let i=2;i<=num;i++){
		    c = a+b;
		    a= b;
		    b = c;	    
	}
	return c;
}

module.exports = fibonacci;
