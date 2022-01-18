const length = {"s":2, "p":6, "d":10, "f":14};
const sum = {'s':1, 'p':2, 'd':3, 'f':4};
const ids = ['s','p','d','f']
const orbitalsCount = {"s":1, "p":3, "d":5, "f":7};
const louiseArrangement = {1:"top",2:"right",3:"bottom",4:"left",5:"top",6:"right",7:"bottom",8:"left"};
const orbitalsNums = {
	"s":{1:"0", 2:"0"},
	"p":{1:"+1", 2:"0", 3:"-1", 4: "+1", 5:"0", 6:"-1"},
	"d":{1:"+2", 2:"+1", 3: "0", 4:"-1", 5:"-2", 6:"+2", 7:"+1", 8:"0", 9:"-1", 10:"-2"},
	"f":{1:"+3", 2:"+2", 3: "+1", 4: "0", 5:"-1", 6:"-2", 7:"-3", 8:"+3", 9:"+2", 10:"+1", 11:"0", 12:"-1", 13:"-2", 14:"-3"}
};
const stages = {
	's' : [[1,2], [3,4], [11,12], [19,20], [37,38], [55,56], [87,88]],
	'p' : [[5,6,7,8,9,10], [13,14,15,16,17,18], [31,32,33,34,35,36], [49,50,51,52,53,54], [81,82,83,84,85,86]],
	'd' : [[21,22,23,24,25,26,27,28,29,30], [39,40,41,42,43,44,45,46,47,48], [71,72,73,74,75,76,77,78,79,80], [103,104,105,106,107,108,109,110,111,112]],
	'f' : [[57,58,59,60,61,62,63,64,65,66,67,68,69,70], [89,90,91,92,93,94,95,96,97,98,99,100,101,102]]
};

function getDaResultInDaNewWay(name,atomic,suplice,result)
{
	var resultInTheNewWay = {};
	var copy = {}
	Object.assign(copy, result);
	resultInTheNewWay[name] = atomic;
	var supliceFound = false;
	for(var i in copy)
	{
		if(supliceFound == false)
		{
			if(i == suplice)
				supliceFound = true;
			delete copy[i];
		}
		else
		{
			resultInTheNewWay[i] = copy[i];
		}
	}
	return resultInTheNewWay;
}

function getElectronicArrangement(atomic_number)
{
	if(parseInt(atomic_number) > 112 || parseInt(atomic_number) <= 0)
		return 0;
	var result = {};
	for(var i = 1;atomic_number >= i;i++)
	{
		for(var i2 in stages)
		{
			for(var i3 in stages[i2])
			{
				for(var i4 in stages[i2][i3])
				{
					if(i == stages[i2][i3][i4])
					{
						if(result[String(parseInt(i3) + sum[i2]) + i2] == null)
							result[String(parseInt(i3) + sum[i2]) + i2] = 1;
						else
							result[String(parseInt(i3) + sum[i2]) + i2] += 1;
						break;
					}
				}
			}
		}
	}
	if(result["4d"] == 4 || result["4d"] == 9)	{
		result["5s"] -= 1;
		result["4d"] += 1;
	}
	else if(result["3d"] == 4 || result["3d"] == 9)
	{
		result["3d"] += 1;
		result["4s"] -= 1;
	}


	if (result["1s"] == 2 && atomic_number > 2 && atomic_number <= 10)
		resultInTheNewWay = getDaResultInDaNewWay("[He]",2,"1s",result);
	else if (result['2p'] == 6 && atomic_number > 10 && atomic_number <= 18)
		resultInTheNewWay = getDaResultInDaNewWay("[Ne]",10,"2p",result);
	else if (result['3p'] == 6 && atomic_number > 18 && atomic_number <= 36)
		resultInTheNewWay = getDaResultInDaNewWay("[Ar]",18,"3p",result);
	else if (result['4p'] == 6 && atomic_number > 36 && atomic_number <= 54)
		resultInTheNewWay = getDaResultInDaNewWay("[Kr]",36,"4p",result);
	else if (result['5p'] == 6 && atomic_number > 54)
		resultInTheNewWay = getDaResultInDaNewWay("[Xe]",54,"5p",result);
	else if (atomic_number <= 2)
		resultInTheNewWay = result;
	return [result,resultInTheNewWay];
}

function getQuantumNumbers(lastShell)
{
	var n = lastShell[0].slice(0,1);
	var l = sum[lastShell[0].slice(1)] - 1;
	var ml = orbitalsNums[lastShell[0].slice(1)][lastShell[1]];
	if(lastShell[1] / parseInt(orbitalsCount[lastShell[0].slice(1)]) <= 1)
		var ms = "p";
	else if(lastShell[1] / parseInt(orbitalsCount[lastShell[0].slice(1)]) > 1)
		var ms = "n";
	return [n,l,ml,ms];
}

function getAtomicNumberUsingQuantumNumbers(n,l,ml,ms)
{
	var theLetter = ids[l];
	var electrons;
	
	electrons = parseInt(Object.keys(orbitalsNums[theLetter])[Object.values(orbitalsNums[theLetter]).indexOf(ml)]);
	if(ms == "n")
		electrons += parseInt(orbitalsCount[theLetter]);
	var atomic_number = stages[theLetter][n - sum[theLetter]][electrons - 1];
	return getElectronicArrangement(atomic_number);
}

function getLouiseSymbol(lastShell)
{
	lastShell[1] = parseInt(lastShell[1])
	if(lastShell[0].slice(1) == "d" || lastShell[0].slice(1) == "f")
		return false;
	if(lastShell[0].slice(1) == "p")
		lastShell[1] += 2

	var louiseSymbol = {"top":0,"left":0,"bottom":0,"right":0}
	for(let x = 1; x <=lastShell[1] ;x++)
		louiseSymbol[louiseArrangement[x]] += 1;
	return louiseSymbol;
}

function opr1(atomic_number)
{
	var Arrangement = getElectronicArrangement(atomic_number);
	const lastShell = [Object.keys(Arrangement[1])[Object.keys(Arrangement[1]).length - 1], Arrangement[0][Object.keys(Arrangement[1])[Object.keys(Arrangement[1]).length - 1]]];
	var QuantumNumbersOfTheLastElectron = getQuantumNumbers(lastShell);
	if(lastShell[0] == "1s" && lastShell[1] == 1)
		var QuantumNumbersOfThe2ndToLastElectron = 0;
	else
	{
		if(lastShell[1] != 1)
			var QuantumNumbersOfThe2ndToLastElectron = getQuantumNumbers([lastShell[0],lastShell[1] - 1]);
		else
			var QuantumNumbersOfThe2ndToLastElectron = getQuantumNumbers([Object.keys(Arrangement[0])[Object.keys(Arrangement[0]).length - 2],Arrangement[0][Object.keys(Arrangement[0])[Object.keys(Arrangement[0]).length - 2]]]);
	}
	var louiseSymbol = getLouiseSymbol(lastShell);
	return {"arr":Arrangement,"qnl":QuantumNumbersOfTheLastElectron,"qn2ndtl":QuantumNumbersOfThe2ndToLastElectron,"ls":louiseSymbol};
}

function opr2(n,l,ml,ms)
{
	var Arrangement = getAtomicNumberUsingQuantumNumbers(n,l,ml,ms);
	const lastShell = [Object.keys(Arrangement[1])[Object.keys(Arrangement[1]).length - 1], Arrangement[0][Object.keys(Arrangement[1])[Object.keys(Arrangement[1]).length - 1]]];
	console.log(lastShell[0])
	console.log(lastShell[1])
	if(lastShell[0] == "1s" && lastShell[1] == 1)
		var QuantumNumbersOfThe2ndToLastElectron = 0;
	else
	{
		if(lastShell[1] != 1)
			var QuantumNumbersOfThe2ndToLastElectron = getQuantumNumbers([lastShell[0],lastShell[1] - 1]);
		else
			var QuantumNumbersOfThe2ndToLastElectron = getQuantumNumbers([Object.keys(Arrangement[0])[Object.keys(Arrangement[0]).length - 2],Arrangement[0][Object.keys(Arrangement[0])[Object.keys(Arrangement[0]).length - 2]]]);
	}
	var louiseSymbol = getLouiseSymbol(lastShell);
	return {"arr":Arrangement,"qnl":[n,l,ml,ms],"qn2ndtl":QuantumNumbersOfThe2ndToLastElectron,"ls":louiseSymbol};
}

function error()
{
	var htmlShit = [document.getElementById("oldWay"),document.getElementById("newWay"),document.getElementById("quantumNumbers"),document.getElementById("louiseSymbol"),document.getElementById("quantumNumbers2ndtolastelectron")];
	for(let x = 0;x<htmlShit.length;x++)
	{
		htmlShit[x].style.margin = "0px";
		htmlShit[x].style.fontSize = htmlShit[0].style.fontSize;
		htmlShit[x].style.textAlign = "center";
		htmlShit[x].innerHTML = "خطأ في المعطيات";
	}
}

function initializeHtml(data) {
	var htmlShit = [document.getElementById("oldWay"),document.getElementById("newWay"),document.getElementById("quantumNumbers"),document.getElementById("quantumNumbers2ndtolastelectron"),document.getElementById("louiseSymbol")];
	for(let x = 0;x<htmlShit.length;x++)
	{
		htmlShit[x].style.textAlign = "left";
		htmlShit[x].innerHTML = "";
		htmlShit[x].style.margin = "10px";
	}

	for(let x in data["arr"][0])
		htmlShit[0].innerHTML += x + "<sup>" + data["arr"][0][x] + "</sup> ";
	for(let x in data["arr"][1])
		htmlShit[1].innerHTML += x + "<sup>" + data["arr"][1][x] + "</sup> ";

	// htmlShit[2].style.textAlign = "center";
	htmlShit[2].style.marginLeft = "20px";
	htmlShit[2].innerHTML +=  "N: " + data["qnl"][0] + "<br>" + "ℓ: " + data["qnl"][1] + "<br>" + "Mℓ: " + data["qnl"][2] + "<br>";
	if(data["qnl"][3] == "n")
		htmlShit[2].innerHTML += "MS: -1/2<br>";
	else
		htmlShit[2].innerHTML += "MS: +1/2<br>";

	// htmlShit[3].style.textAlign = "center";	
	if(data["qn2ndtl"] == 0)
		htmlShit[3].innerHTML += "1s<sup>1</sup> لا يوجد الكترون قبل الـ";
	else
	{
		htmlShit[3].style.marginLeft = "20px";
		htmlShit[3].innerHTML +=  "N: " + data["qn2ndtl"][0] + "<br>" + "ℓ: " + data["qn2ndtl"][1] + "<br>" + "Mℓ: " + data["qn2ndtl"][2] + "<br>";
	
		if(data["qn2ndtl"][3] == "n")
			htmlShit[3].innerHTML += "MS: -1/2<br>";
		else
			htmlShit[3].innerHTML += "MS: +1/2<br>";
	}

	htmlShit[4].style.textAlign = "center";
	htmlShit[4].style.fontSize = "30px";	
	if(data["ls"] == false)
	{
		htmlShit[4].style.fontSize = htmlShit[0].style.fontSize;
		htmlShit[4].innerHTML += "لا يمكن كتابة رمز لويس";
	}
	else
	{
		console.log(data["ls"]);
		if(data["ls"]["top"] == 2)
			htmlShit[4].innerHTML += "..<br>";
		if(data["ls"]["top"] == 1)
			htmlShit[4].innerHTML += ".<br>";
		
		if(data["ls"]["left"] == 2)
			htmlShit[4].innerHTML += ": X ";
		if(data["ls"]["left"] == 1)
			htmlShit[4].innerHTML += ". X ";
		if(data["ls"]["left"] == 0)
			htmlShit[4].innerHTML += "X";

		if(data["ls"]["right"] == 2)
			htmlShit[4].innerHTML += " :<br>";
		if(data["ls"]["right"] == 1)
			htmlShit[4].innerHTML += " .<br>";

		if(data["ls"]["bottom"] == 2)
			htmlShit[4].innerHTML += "˙˙";
		if(data["ls"]["bottom"] == 1)
			htmlShit[4].innerHTML += "˙";
	}
}

function main(oprType)
{
	if(oprType == 1)
	{
		var n = document.getElementById("n").value;
		var l = document.getElementById("l").value;
		var ml = document.getElementById("ml").value;
		var ms = document.getElementById("ms").value;
		if(n == "none" || l == "none" || ml == "none" || ms == "none" || n == "" || l == "" || ml == "" || ms == "")
		{
			error();
			return 0;
		}
		var data = opr2(n,l,ml,ms);
		initializeHtml(data);
	}
	else if(oprType == 0)
	{
		var atomic_number = document.getElementById("textin").value;
		if(atomic_number == "" || atomic_number < 0 || atomic_number > 112)
		{
			error()
			return 0;
		}
		var data = opr1(atomic_number);
		initializeHtml(data);
	}
}