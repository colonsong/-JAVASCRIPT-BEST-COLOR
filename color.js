var r1;
var g1;
var b1;
var r2, g2, b2;


function set_color_brghtdiff() {
  //18.15
  var br1 = (299 * r1 + 587 * g1 + 114 * b1) / 1000;
  //console.log("br1 :" + br1);
  var br2_range = parseInt(Math.floor((Math.random() * 255) + 0));
  // math abs($BR1 - $BR2) < 125
  // -125 < ($BR1-$BR2) < 125
  var brightdiff = parseInt(Math.abs(br1 - br2_range));
  if (brightdiff < 125) {
    console.log("亮度不足："+brightdiff);
    return set_color_brghtdiff();
  }

  console.log("亮度相異度: " + brightdiff);
  //random r2 startㄍ
  //$BR2 = (299 * $R2 + 587 * $G2 + 114 * $B2) / 1000;
  //if br2 = 10
  /**
  10 = (299 * $R2 + 587 * $G2 + 114 * $B2) / 1000;
  10 * 1000 = (299 * $R2 + 587 * $G2 + 114 * $B2)
  假設R2 G2 B2 都為同一個變數ｘ
  10000 = x*299 + x*587 + 114*x
  10000 = x(299+587+114)
  x = 10*000/(299+587+114)
  x = br2_range * 1000 / (299+587+114)
  總共的ｒａｎｇｅ就是3X

	 假設 g2 b2 = 0
	 br2_range = 299 * r2 / 1000
	 R2最大值Range 為 (br2_range * 1000 / 299)
   10*1000 = (299*比例*x + 587*比例＊x + *比例*x)
   10000 = x(299*比例 ＋587*比例 ＋ 114＊比例)

	 **/
  var total_range = br2_range ;

  console.log('total_range:' + total_range );
  var r2bi = parseInt(Math.floor((Math.random() * br2_range) + 0));
  console.log('r2bi:' + r2bi);
  br2_range = br2_range - r2bi;

  var g2bi = parseInt(Math.floor((Math.random() * br2_range) + 0));
  console.log('g2bi:' + g2bi);

  br2_range = br2_range - g2bi;

  var b2bi = br2_range;
  console.log('b2bi:' + b2bi);

  var x = total_range * 1000 / (299*r2bi + 587*g2bi + 114*b2bi);

  r2 = parseInt(r2bi * x);
  g2 = parseInt(g2bi * x);
  b2 = parseInt(b2bi * x);

  console.log('比例 x:' + x);
  console.log('total_range b2:' + b2);
  console.log('@total_range :' + (299 * r2 + 587 * g2 + 114 * b2)/1000)
  console.log("r2: " + r2 + " g2: " + g2 + " b2: " + b2);
  console.log("br2_range:" + (299 * r2 + 587 * g2 + 114 * b2) / 1000);


}
$(document).ready(function() {
  change_color();
});


function change_color() {
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



  $('.lead').css('color', 'rgb(' + r2 + ', ' + g2 + ', ' + b2 + ')');

}

function random_color() {
  var color_random = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
    'B', 'C', 'D', 'E', 'F'
  ];
  var hex_num = 6;
  var hex_str = '';
  do {
    hex_str += color_random[Math.floor((Math.random() * (15) + 0))];
  } while (hex_num-- > 1)
  console.log('亂數hex_string: ' + hex_str);
  $('#hex_in').val(hex_str);
  change_color();
  colordiff();


}

function hex_torgb() {
  var input = $('#hex_in').val();

  input = input.toUpperCase();
  var a = getdec(input.substring(0, 1));
  var b = getdec(input.substring(1, 2));
  var c = getdec(input.substring(2, 3));
  var d = getdec(input.substring(3, 4));
  var e = getdec(input.substring(4, 5));
  var f = getdec(input.substring(5, 6));
  //set rgb val
  r1 = (a * 16) + b;
  g1 = (c * 16) + d;
  b1 = (e * 16) + f;
  console.log('RGB 背景顏色' + r1 + ' ' + g1 + ' ' + b1);

}

function getdec(hex) {
  var value;
  if (hex == "A")
    value = 10;
  else
  if (hex == "B")
    value = 11;
  else
  if (hex == "C")
    value = 12;
  else
  if (hex == "D")
    value = 13;
  else
  if (hex == "E")
    value = 14;
  else
  if (hex == "F")
    value = 15;
  else
    value = eval(hex)
  return value;
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
  try_num = 20;
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

  console.log('最大值：' + best_colordiff_num + '顏色： r1: ' + r1 + ' g1: ' + g1 + ' b1: ' + b1 + ' r2: ' + r2 +
    ' g2: ' + g2 + ' b2: ' + b2);

}
