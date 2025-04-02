function 显示时间() {
  var 现在 = new Date();
  var 时 = 现在.getHours();
  var 分 = 现在.getMinutes();
  var 秒 = 现在.getSeconds();
  秒 = 秒 < 10 ? "0" + 秒 : 秒; // 如果秒是小于10的数字，前面加一个0
  分 = 分 < 10 ? "0" + 分 : 分; // 如果分是小于10的数字，前面加一个0
  时 = 时 < 10 ? "0" + 时 : 时; // 如果时是小于10的数字，前面加一个0
  var 时间字符串 = 时 + ":" + 分 + ":" + 秒;
  document.getElementById("时间").innerHTML = 时间字符串;
  setTimeout(显示时间, 1000); // 每秒运行一次
}
