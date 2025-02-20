function getMinMax(str) {
  const strToArr = str.split(' ');
  const convertStrToNum = strToArr.map( ( elem ) => Number( elem ));
  const numArr = convertStrToNum.filter( ( elem ) => Number.isFinite( elem ));
  
  return {
    min: Math.min( ...numArr ),
    max: Math.max( ...numArr ),
  };
};