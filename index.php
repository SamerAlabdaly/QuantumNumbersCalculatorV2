<?php
	$num = intval(file_get_contents("num.txt"));
	$num = $num + 1;
	$file = fopen("num.txt", "w");
	fwrite($file, strval($num));
	fclose($file);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200&display=swap" rel="stylesheet">
	<link rel="icon" type="image/x-icon" href="favicon.ico">
	<title>Quantum Numbers</title>
</head>
<body>
	<!-- ℓ -->
	<div class="neon">
		<div class="header" id="header1">Quantum</div>
		<div class="header">Numbers<sub>V2</sub></div>
	</div>
	<div class="main">
		<div id="text">الطـريـقة الـعاديـة</div>
		<input type="number" min="1" max="112" id="textin" placeholder="الـعـدد الـذري"><br>
		<input type="button" value="أحسب" id="btn" onclick="main(0)">
	</div>
	<div class="main">
		<div id="text">الطـريـقة العكسـية</div>
		<div class="options_holder">
			<span><select id="n" onchange="changeSelectVal1()">
				<option value="none" disabled selected hidden>N</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
			</select></span>
			<span><select id="l" onchange="changeSelectVal2()">
				<option value="none" disabled selected hidden>ℓ</option>
			</select></span>
			<span><select id="ml"><option value="none" disabled selected hidden>Mℓ</option></select></span>
			<span><select id="ms"><option value="none" disabled selected hidden>MS</option><option value="n">-1/2</option><option value="p">+1/2</option></select></span>
		</div>
		<input type="button" value="أحسب" id="btn" onclick="main(1)">
	</div>
	<div class="result">
		<div id="text">الـنـتـيـجـة</div>
		<div id="smoltext" class="smol">الطريقة القديمة</div>
		<div class="main r"><p id="oldWay">لا توجد نتيجة</p></div>
		<div id="smoltext" class="smol">الطريقة الحديثة</div>
		<div class="main r"><p id="newWay">لا توجد نتيجة</p></div>
		<div id="smoltext" class="smol">اعداد الكم</div>
		<div class="main r"><p id="quantumNumbers">لا توجد نتيجة</p></div>
				<div id="smoltext" class="smol">اعداد الكم للإلكترون ما قبل الأخير</div>
		<div class="main r"><p id="quantumNumbers2ndtolastelectron">لا توجد نتيجة</p></div>
		<div id="smoltext" class="smol">رمز لويس</div>
		<div class="main r"><p id="louiseSymbol">لا توجد نتيجة</p></div>
	</div>
	<script type="text/javascript" src="javaScript/htmlStuff.js"></script>
	<script type="text/javascript" src="javaScript/calc.js"></script>
	<div class="main" id="userCounter"><p>عدد الزوار</p><p id="counter"><?php echo file_get_contents("num.txt") ?></p></div>
	<p class="inDaTopOfMain" style="text-align: right;">من انا؟</p>
	<div class="main">
		<p style="text-align:right;">سامر كريم العبدلي<br>طالب في اعدادية جابر الانصاري<br>تواصل معي على<br>
			<a href="https://fb.com/sam3r.karem">فيسبوك</a> 
			<a href="https://instagram.com/uvr.z">انستاكرام</a> 
			<a href="https://t.me/samer_alabdaly">تليكرام</a>
		</p>
	</div>
	<p class="inDaTopOfMain" style="text-align: left;">u should listen 2</p>
	<div class="main" style='text-align:left;padding-left: 20px;'>
		<p>
		<?php
			$bestSongsEver = array(
				"Vansire - Angel Youth"=>"https://www.youtube.com/watch?v=uVodbOvw6X4",
				"Vansire - Lonely Zone"=>"https://www.youtube.com/watch?v=Z8-6Kn38D9g",
				"Christopher Williams - I'm Dreamin'"=>"https://www.youtube.com/watch?v=9nJpVBsFmyE",
				"Beabadoobee - Tired"=>"https://www.youtube.com/watch?v=OVaN7jXQss4",
				"Trudy And The Romance - Doghouse"=>"https://www.youtube.com/watch?v=Dtoi5NMpbB0",
				"Meiko Nakahara - Fantasy"=>"https://www.youtube.com/watch?v=qICHnoeuRcg"
			);
			foreach ($bestSongsEver as $key => $value)
			{
				echo "<a href='".$value."'>".$key."</a><br>";
			}
		?>
		</p>
	</div>
</body>
</html>