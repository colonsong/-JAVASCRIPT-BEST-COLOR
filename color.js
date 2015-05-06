var r1;
var g1;
var b1;
var r2, g2, b2 ,r2h,g2h,b2h;
var ok = '<span class="glyphicon glyphicon-ok"></span>';
var color_random = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
  'B', 'C', 'D', 'E', 'F'
];

function reset_ok()
{
  $('.ok').html('');
}
function set_color_brghtdiff() {
  //18.15
  var br1 = (299 * r1 + 587 * g1 + 114 * b1) / 1000;
  //console.log("br1 :" + br1);
  var br2_range = parseInt(Math.floor((Math.random() * 255) + 0));
  // math abs($BR1 - $BR2) < 125
  // -125 < ($BR1-$BR2) < 125
  var brightdiff = parseInt(Math.abs(br1 - br2_range));
  if (brightdiff < 100) {
    console.log("亮度不足："+brightdiff);
    return set_color_brghtdiff();
  }
  if(brightdiff >= 125)
  {
    console.log('@@@@@@@@@@@' + brightdiff);
    $('.bright_ok').html(ok);
  }
  else
  {
    $('.bright_ok').html('');
  }
  $('#bright_diff').text(brightdiff);

  console.log("亮度相異度: " + brightdiff);
  //random r2 startㄍ
  //$BR2 = (299 * $R2 + 587 * $G2 + 114 * $B2) / 1000;
  /**
  10 = (299 * $R2 + 587 * $G2 + 114 * $B2) / 1000;

   10*1000 = (299*比例*x + 587*比例＊x + *比例*x)
   10000 = x(299*比例 ＋587*比例 ＋ 114＊比例)

	 **/
  var total_range = br2_range ;
  console.log('total_range:' + total_range );

  var g2bi = Math.floor((Math.random() * br2_range) + 0);
  console.log('g2bi:' + g2bi);
  br2_range = br2_range - g2bi;

  var r2bi = Math.floor((Math.random() * br2_range) + 0);
  console.log('r2bi:' + r2bi);
  br2_range = br2_range - r2bi;









  var b2bi = br2_range;
  console.log('b2bi:' + b2bi);

  //r2bi*1000 = 299*r2
  r2 = parseInt(r2bi * 1000 /299);

  g2 = parseInt(g2bi * 1000 /587);
  b2 = parseInt(b2bi * 1000 /114);
if(r2 > 255 || g2 > 255 || b2 > 255)
{
  set_color_brghtdiff();
}

  console.log('@total_range :' + (299 * r2 + 587 * g2 + 114 * b2)/1000)
  console.log("r2: " + r2 + " g2: " + g2 + " b2: " + b2);
  console.log("br2_range:" + (299 * r2 + 587 * g2 + 114 * b2) / 1000);


}
$(document).ready(function() {

  change_color();
});


function change_color() {
  reset_ok();
  //trans and set rgb

    hex_torgb();


    $('#r1').css('color', 'rgb(' + r1 + ', 0, 0)');
    $('#g1').css('color', 'rgb(0, ' + g1 + ', 0)');
    $('#b1').css('color', 'rgb(0 , 0, ' + b1 + ')');
  //set background css
  $('body').css('background-color', 'rgb(' + r1 + ' , ' + g1 + ', ' + b1 +
    ')');

  //get font color
  set_color_brghtdiff();
  colordiff();
  pythdiff();
  check_lumdiff();



  $('.lead').css('color', 'rgb(' + r2 + ', ' + g2 + ', ' + b2 + ')');

}

function random_color() {
  reset_ok();

  var hex_num = 6;
  var hex_str = '';
  do {
    hex_str += color_random[Math.floor((Math.random() * (15) + 0))];
  } while (hex_num-- > 1)
  console.log('亂數hex_string: ' + hex_str);
  $('#hex_in').val(hex_str);
  change_color();
  colordiff();
  pythdiff();
  check_lumdiff();


}

function hex_torgb() {
  var input = $('#hex_in').val();

  input = input.toUpperCase();
  var a = parseInt(input.substring(0, 1), 16);
  var b = parseInt(input.substring(1, 2), 16);
  var c = parseInt(input.substring(2, 3), 16);
  var d = parseInt(input.substring(3, 4), 16);
  var e = parseInt(input.substring(4, 5), 16);
  var f = parseInt(input.substring(5, 6), 16);
  //set rgb val
  r1 = (a * 16) + b;
  g1 = (c * 16) + d;
  b1 = (e * 16) + f;
  console.log('RGB 背景顏色' + r1 + ' ' + g1 + ' ' + b1);

}

function pythdiff()
{
  var rd = r1-r2;
  var gd = g1-g2;
  var bd = b1-b2;
  var pythdiff = parseInt(Math.sqrt(rd*rd + gd*gd + bd*bd));
  $('#pythdiff_diff').text(pythdiff);
  if(pythdiff > 250)
  {
    $('.phthdiff_ok').html(ok);
  }
  else
  {
    $('.phthdiff_ok').html('');
  }
}

/**
//簡單說就是顏色相減差加起來要> 500
return max(r1,r2) - min(r1,r2) +
           max(g1,g2) - min(g1,g2) +
           max(b1,b2) - min(b1,b2);
*/
var try_num;
var best_colordiff_num;
var best_colordiff;
function colordiff() {
  r2h = '';
  b2h  = '';
  g2h = '';
  try_num = 5;
  best_colordiff_num = 0;
  best_colordiff = [];

  //一百次的嘗試 與顏色相差<500就重算
  console.log('剛開始顏色： r1: ' + r1 + ' g1: ' + g1 + ' b1: ' + b1 + ' r2: ' + r2 +
    ' g2: ' + g2 + ' b2: ' + b2);



  while (( try_num-- > 0)) {
     var colordiff_num = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 -
      b2);
      console.log('顏色差異度: ' + colordiff_num + ' try_num: ' + try_num);
      if(colordiff_num > 500)
      {
        best_colordiff_num = colordiff_num;
        best_colordiff = [r1,g1,b1,r2,g2,b2];
        break;
      }
      if( colordiff_num > best_colordiff_num)
      {
        best_colordiff_num = colordiff_num;
        best_colordiff = [r1,g1,b1,r2,g2,b2];
      }
      set_color_brghtdiff();

  }

  r1 = best_colordiff[0];
  g1 = best_colordiff[1];
  b1 = best_colordiff[2];
  r2 = best_colordiff[3];
  g2 = best_colordiff[4];
  b2 = best_colordiff[5];
  console.log('@@@@@@ ' + r2 +" "+ g2 +" "+ b2);

  r2h  = r2.toString(16);
  if(r2h.length == 1)
  {
    r2h = '0'+r2h;
  }
  g2h  = g2.toString(16);
  if(g2h.length == 1)
  {
    g2h = '0'+g2h;
  }
  b2h = b2.toString(16);
  if(b2h.length == 1)
  {
    b2h = '0'+b2h;
  }
  console.log('@@@@@' + r2h +""+ g2h +""+ b2h);

  $('#font_hex').text(r2h +"" + g2h + b2h);

  if(best_colordiff_num >= 500)
  {
    $('.color_ok').html(ok);
  }
  $('#color_diff').text(best_colordiff_num);

  console.log('最大值：' + best_colordiff_num + '顏色： r1: ' + r1 + ' g1: ' + g1 + ' b1: ' + b1 + ' r2: ' + r2 +
    ' g2: ' + g2 + ' b2: ' + b2);

}
function check_lumdiff()
{
  var lumi = parseInt(lumdiff());
  $('#lumi_diff').text(lumi);

  if(lumi >= 5)
  {
    $('.lumi_ok').html(ok);
  }
  else
  {
    $('.lumi_ok').html('');
  }
}
function lumdiff(){
    var l1 = 0.2126 * Math.pow(r1/255, 2.2) +
          0.7152 * Math.pow(g1/255, 2.2) +
          0.0722 * Math.pow(b1/255, 2.2);

    var l2 = 0.2126 * Math.pow(r2/255, 2.2) +
          0.7152 * Math.pow(g2/255, 2.2) +
          0.0722 * Math.pow(b2/255, 2.2);

    if(l1 > l2){
        return (l1+0.05) / (l2+0.05);
    }else{
        return (l2+0.05) / (l1+0.05);
    }
}
