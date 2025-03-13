const run = (text) => {
    // BEGIN
    function takeLast(text,n) {
        return text.length > 2 ? Array.from(text).reverse().join('').substring(0,n) : null;
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run