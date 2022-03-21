function addOption(t,v,s)
{
	var o = document.createElement("option");
	o.text = t;
	o.value = v;
	s.add(o);
}

function changeSelectVal1()
{
	var n = parseInt(document.getElementById("n").value);
	var select = document.getElementById("l");
	select.innerHTML = "<option value='' disabled selected hidden>ℓ</option>";
	var x = document.getElementById("ml");
	x.innerHTML = "<option value='' disabled selected hidden>Mℓ</option>";
	
	if(n >= 1 && n <= 7)
		addOption("0","0",select)
	if(n >= 2 && n <= 6)
		addOption("1","1",select)
	if(n >= 3 && n <= 6)
		addOption("2","2",select)
	if(n >= 4 && n <= 5)
		addOption("3","3",select)
}

function changeSelectVal2()
{
	var l = parseInt(document.getElementById("l").value);
	var select = document.getElementById("ml");
	select.innerHTML = "<option value='' disabled selected hidden>Mℓ</option>";

	if(l == 0)
		addOption("0","0",select)
	else if(l == 1)
	{
		addOption("-1","-1",select)
		addOption("0","0",select)
		addOption("+1","+1",select)
	}
	else if(l == 2)
	{
		addOption("-2","-2",select)
		addOption("-1","-1",select)
		addOption("0","0",select)
		addOption("+1","+1",select)
		addOption("+2","+2",select)
	}
	else if(l == 3)
	{
		addOption("-3","-3",select)
		addOption("-2","-2",select)
		addOption("-1","-1",select)
		addOption("0","0",select)
		addOption("+1","+1",select)
		addOption("+2","+2",select)
		addOption("+3","+3",select)
	}
}
