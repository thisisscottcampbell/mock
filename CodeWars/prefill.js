function prefill(n, v) {
  
    if (Number(n) === 0) return [];
    
  
    if (!Number(n) || n < 0 || n % 1 !== 0 || typeof n === 'boolean') {
      const error = new TypeError();
      error.name = "TypeError";
      error.message =  `${n} is invalid`;
      throw error;
    }
    
    return new Array(n).fill(v);
  }