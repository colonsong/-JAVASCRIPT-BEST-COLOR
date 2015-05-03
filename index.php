<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Bootstrap 101 Template</title>
        <!-- Bootstrap -->
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
          <![endif]-->
        <link href="sample.css" rel="stylesheet">
    </head>
    <body>
        <div class="site-wrapper">
            <div class="site-wrapper-inner">
                <div class="cover-container">
                    <div class="masthead clearfix">
                        <div class="inner">
                            <h3 class="masthead-brand">Cover</h3>
                            <nav>
                                <ul class="nav masthead-nav">
                                    <li class="active"><a href="#">Home</a>
                                    </li>
                                    <li><a href="#">Features</a>
                                    </li>
                                    <li><a href="#">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="inner cover">
                        <h1 class="cover-heading">
                            <span id="r1">R1</span>
                            <span id="g1">G1</span>
                            <span id="b1">B1</span>

                                <div class="form-group">
                                    <label class="sr-only" for="exampleinputAmount">Amount (in dollars)</label>
                                    <div class="input-group">
                                        <div class="input-group-addon">背景顏色6碼 #</div>
                                        <input type="text" class="form-control" id="hex_in"  value="AABBCC">
                                    </div>
                                </div>
                                <button type="submit" class="btn " onclick="change_color();">試試看</button>
                                <button type="submit" class="btn " onclick="random_color();">亂數一下</button>

                            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    </div>
                    <div class="mastfoot">
                        <div class="inner">
                            <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script>
                                    var $R1 = 90;
                                    var $G1 = 90;
                                    var $B1 = 200;
                                    function brghtdiff($R1, $G1, $B1, $R2, $G2, $B2) {
                                        //目標 < 125
                                        //BR1 為已知固定值
                                        $BR1 = (299 * $R1 + 587 * $G1 + 114 * $B1) / 1000;
                                        $BR2 = (299 * $R2 + 587 * $G2 + 114 * $B2) / 1000;
                                        // math abs($BR1 - $BR2) < 125
                                        // -125 < ($BR1-$BR2) < 125
                                        // -125 - $BR1 < - $BR2 < 125 - $BR1
                                        // - $BR1 < -$BR2 + 125 < 250 - $BR1
                                        // 0 < -$BR2 + $BR1 + 125 < 250
                                        // 0 < $BR1 - $BR2 + 125 < 250
                                        return abs($BR1 - $BR2);
                                    }
                                    function get_color_brghtdiff() {
                                        //18.15
                                        var br1 = (299 * $R1 + 587 * $G1 + 114 * $B1) / 1000;
                                        console.log("br1 :" + br1);
                                        var br2_range = Math.floor((Math.random() * (125 - br1)) + 0);
                                        console.log("br2_range: " + br2_range);
                                        //random r2 start
                                        /**
                                         假設 g2 b2 = 0
                                         br2_range = 299 * r2 / 1000
                                         R2最大值Range 為 (br2_range * 1000 / 299)
                                         **/
                                        var r2 = Math.floor((Math.random() * (br2_range * 1000 / 299)) + 0);
                                        //random g2
                                        //現在r2為已知,假設b2為0
                                        //br2_range = (299*r2 + 587 * g2) /1000
                                        //br2_range * 1000 = 299*r2 + 587*g2
                                        //g2 = (br2_range*1000 -299*r2 )/587
                                        var g2 = Math.floor((Math.random() * (((br2_range * 1000) - (299 * r2)) / 587) + 0));
                                        //現在r2 g2 為已知
                                        // br2_range = (299*r2 + 587*g2 + 114*b2) / 1000
                                        //br2_range * 1000 = (299*r2 + 587*g2 + 114*b2)
                                        //b2 = ((br2_range *1000) - (299*r2 + 587*g2)) / 114
                                        var b2 = Math.floor((Math.random() * (((br2_range * 1000) - (299 * r2 + 587 * g2)) / 114) + 0));
                                        console.log("r2: " + r2 + " g2: " + g2 + " b2: " + b2);
                                        console.log("br2_range:" + (299 * r2 + 587 * g2 + 114 * b2) / 1000);
                                        return [r2, g2, b2];
                                    }
                                    $(document).ready(function () {
                                      change_color();
                                    });


                                    function change_color()
                                    {
                                      //trans and set rgb
                                      hex_torgb();
                                      //set css

                                      $('body').css('background-color', 'rgb(' + $R1 + ' , ' + $G1 + ', ' + $B1 + ')');
                                      //get font color
                                      var bg_color = get_color_brghtdiff();
                                      console.log("bg_color : " + bg_color);
                                      $('*').css('color', 'rgb(' + bg_color[0] + ', ' + bg_color[1] + ', ' + bg_color[2] + ')');
                                      $('#r1').css('color', 'rgb(' + $R1 + ', 0, 0)');
                                      $('#g1').css('color', 'rgb(0, ' + $G1 + ', 0)');
                                      $('#b1').css('color', 'rgb(0 , 0, ' + $B1 + ')');
                                    }
                                    function random_color()
                                    {
                                      var color_random = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
                                      var hex_num = 6;
                                      var hex_str = '';
                                      do{
                                        hex_str +=   color_random[Math.floor((Math.random() * (15) + 0))];
                                      }while(hex_num-- > 1)
                                      console.log('亂數hex_string: ' + hex_str);
                                      $('#hex_in').val(hex_str);
                                      change_color();

                                    }
                                    function hex_torgb()
                                    {
                                        var input = $('#hex_in').val();

                                        input = input.toUpperCase();
                                        var a = getdec(input.substring(0, 1));
                                        var b = getdec(input.substring(1, 2));
                                        var c = getdec(input.substring(2, 3));
                                        var d = getdec(input.substring(3, 4));
                                        var e = getdec(input.substring(4, 5));
                                        var f = getdec(input.substring(5, 6));
                                        //set rgb val
                                        $R1 = (a * 16) + b;
                                        $G1 = (c * 16) + d;
                                        $B1 = (e * 16) + f;
                                        console.log('RGB 背景顏色' + $R1 + ' '+  $G1 + ' '+ $B1);

                                    }
                                    function getdec(hex)
                                    {
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
        </script>
    </body>
</html>
