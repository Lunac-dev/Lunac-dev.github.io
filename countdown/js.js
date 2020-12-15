function CountdownTimer(elm, tl, mes) {
  this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
  initialize: function (elm, tl, mes) {
    this.elem = document.getElementById(elm);
    this.tl = tl;
    this.mes = mes;
  },
  countDown: function () {
    var timer = '';
    var today = new Date();
    var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
    var hour = Math.floor((day * 24) + ((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
    var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
    var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
    var me = this;

    if ((this.tl - today) > 0) {
      if (hour) timer += '<span class="cdt_num">' + hour + '</span><small>時間</small>';
      timer += '<span class="cdt_num">' + this.addZero(min) + '</span><small>分</small><span class="cdt_num">' + this.addZero(sec) + '</span><small>秒</small><span class="cdt_num milli">' + this.addZero(milli) + '</span>';
      this.elem.innerHTML = timer;
      tid = setTimeout(function () {
        me.countDown();
      }, 10);
    } else {
      this.elem.innerHTML = this.mes;
      return;
    }
  },
  addZero: function (num) {
    return ('0' + num).slice(-2);
  }
}

function CDT() {
  var myD = Date.now();
  var start = new Date('2020-12-15T00:00+09:00'); // 開始日時の指定
  var myS = start.getTime();
  var end = new Date('2020-12-27T15:00+09:00'); // 終了日時の指定
  var myE = end.getTime();

  // 今日が開始日前か期間中か終了日後かの判別
  if (myS <= myD && myE >= myD) {
    var text = '<span>終了</span><span>まで</span>';
    var tl = end;
  } // 期間中
  else if (myS > myD) {
    var text = '<span>開始</span><span>まで</span>';
    var tl = start;
  } // 開始日前
  else {
    var text = "";
  } // 終了日後

  var timer = new CountdownTimer('cdt_date', tl, '終了しました</small>'); // 終了日後のテキスト
  timer.countDown();
  target = document.getElementById("cdt_txt");
  target.innerHTML = text;
}
window.onload = function () {
  CDT();
}