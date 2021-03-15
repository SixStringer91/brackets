module.exports = function check(str, bracketsConfig) {
    if (!str) return true
    const newStr = bracketsConfig.reduce((a,b) => a = a.replace(b[0] + b[1], ''),str)
    return newStr===str ? false : check(newStr, bracketsConfig);
}
