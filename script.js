function fibonacci(num) {
   let a = 0;
   let b = 1;
   if(num==1) return a;
   if(num==2) return b;
	let c;
	for(let i=3;i<=num;i++){
		    c = a+b;
		    a= b;
		    b = c;	    
	}
	return c;
}

module.exports = fibonacci;
