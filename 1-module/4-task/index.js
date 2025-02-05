function checkSpam(str) {
  const lowerCaseText = str.toLowerCase();
  
  return (lowerCaseText.includes('xxx') || lowerCaseText.includes('1xbet')) ?? !str;
};