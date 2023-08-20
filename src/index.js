module.exports = function check(str, bracketsConfig) {
  while (str.length > 0) {
    var output = str
    .replace("{}", "")
    .replace("[]", "")
    .replace("()", "")
    .replace("||", "")
    .replace("11", "")
    .replace("22", "")
    .replace("33", "")
    .replace("44", "")
    .replace("55", "")
    .replace("66", "")
    .replace("77", "")
    .replace("88", "")
    .replace("12", "")
    .replace("34", "")
    .replace("56", "");
        if (str == output) return false;
        str = output;
    }
    return true;
}
