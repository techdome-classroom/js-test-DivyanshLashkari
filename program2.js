const decodeTheRing = function (s, p) {

    // write your code here
    if(s.lenght !== p.lenght){
      return false;
    }

    for(let i=0; i<s.lenght; i++){
      if(s[i] !== p[i] && p[i] !== '?'){
        return false;
      }
    }
    return true

  };
  
  module.exports = decodeTheRing;