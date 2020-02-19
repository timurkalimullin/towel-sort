
module.exports = function towelSort (matrix) {
    let arr =[];
    if (arguments.length==0 || matrix.length==0 ) return arr;
    
    matrix.map((item,i)=>{
      if (i%2==0) {
        arr.push(item)
      } else {
        arr.push(item.reverse())
      }
    })
    return arr.reduce((a,b)=>a.concat(b))
}
