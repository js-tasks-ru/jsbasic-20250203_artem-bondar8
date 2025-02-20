function camelize(str) {
  const arrayStr = str.split('-');
  const camelCaseArr = arrayStr.map( ( word, i ) => (i !== 0) ? `${word[0].toUpperCase()}${word.slice(1)}` : word);
  const camelCaseStr = camelCaseArr.join('');
  
  return camelCaseStr;
};