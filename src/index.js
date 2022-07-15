module.exports = function check(str, bracketsConfig) {
  const length = ((str.length)/2)
  for (let i=0; i<=length; ++i)
  (bracketsConfig.map(pair => pair.join(''))).forEach(pair => str = str.replace(pair, ''));
  return (str == '') ? true : false;
}