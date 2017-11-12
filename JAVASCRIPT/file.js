
var a=0;

function main()
{
	document.getElementById("form_name").style.display="none";
	document.getElementById("form_email").style.display="none";
	document.getElementById("form_rollno").style.display="none";
	document.getElementById("button_reset").style.display="none";
	document.getElementById("button_submit").style.display="none";
} 
function register_record()
{
	document.getElementById("form_name").style.display="block";
	document.getElementById("form_email").style.display="block";
	document.getElementById("form_rollno").style.display="block";
	document.getElementById("button_reset").style.display="inline";
	document.getElementById("button_submit").style.display="inline";
	a=1;
}
function delete_record()
{
	document.getElementById("form_name").style.display="none";
	document.getElementById("form_email").style.display="none";
	document.getElementById("form_rollno").style.display="block";
	document.getElementById("button_reset").style.display="inline";
	document.getElementById("button_submit").style.display="inline";
	a=2;
}
function edit_record()
{
	document.getElementById("form_name").style.display="none";
	document.getElementById("form_email").style.display="none";
	document.getElementById("form_rollno").style.display="block";
	document.getElementById("button_reset").style.display="inline";
	document.getElementById("button_submit").style.display="inline";
	a=3;
}
function display()
{
	document.getElementById("form_name").style.display="block";
	document.getElementById("form_email").style.display="block";
	document.getElementById("form_rollno").style.display="none";
	a=4;
}

function sub()
{
	if(a==1)
	{
		entry();
		main();
	}
	else if(a==2)
	{
		delete_entry();
	}
	else if(a==3)
	{
		if(check()==1)
		{
			display();	
		}
		else{
			alert("NO SUCH RECORD");	
		}
		
	}
	else if(a==4)
	{
	edit();
	main();
	}
}
function check()
{
var a=document.getElementsByTagName("tr");
var i=1;
while(i<a.length)
{
	var row=a[i].firstChild.innerHTML;
	if(row==document.getElementById("rollno").value)
	{
		return 1;
	}
	i++;
}
return 0;
}
function edit()
{
var a=document.getElementsByTagName("tr");
var i=1;
while(i<a.length)
{
	var row=a[i].firstChild.innerHTML;
	if(row==document.getElementById("rollno").value)
	{
		a[i].childNodes[1].innerHTML=document.getElementById("name").value;
		a[i].childNodes[2].innerHTML=document.getElementById("email").value;
	}
	i++;
}
document.getElementById("form1").reset();
}
function delete_entry()
{
var a=document.getElementsByTagName("tr");
var table=document.getElementById("table");
var i=1;
while(i<a.length)
{
	var row=a[i].firstChild.innerHTML;
	if(row==document.getElementById("rollno").value)
	{
		table.deleteRow(i);
	}
	i++;
}
document.getElementById("form1").reset();
}
function entry()
{
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var rollno=document.getElementById("rollno").value;
var pttrn1=/[a-z A-Z]+\s[a-z A-Z]+/;
var pttrn2=/[a-z A-Z]+\.[a-z A-Z]+[@gmail.com]/;
var pttrn3=/^[0-9]{10}$/;
if(name == "")
	{
	window.alert("NAME CANNOT BE NULL");
	}
	
else if(email == "")
	{
	window.alert("EMAIL CANNOT BE NULL");
	}
else if(rollno == "")
	{
	window.alert("ROLLNO CANNOT BE NULL");
	}
else if(!pttrn1.test(name))
	{
	window.alert("ENTER NAME IN CORRECT FORMAT");
	}
else if(!pttrn2.test(email))
	{
	window.alert("ENTER EMAIL IN CORRECT FORMAT");
	}
else if(!pttrn3.test(rollno))
	{
	window.alert("ENTER ROLL NO IN CORRECT FORMAT");
	}
else{
var array=document.getElementsByTagName("tr");
var flag=1;	
var i=1;

while(i<array.length)
{
	
	var row=array[i].firstChild.innerHTML;	
	if(row==document.getElementById("rollno").value)
	{flag=0;}
	i++;
}

if(flag == 0)
{
	window.alert("RECORD ALREADY EXISTS");
}
else{
var a=document.createElement("tr");
var b=document.createElement("td");
var c=document.createTextNode(rollno);
b.appendChild(c);
a.appendChild(b);
var e=document.createElement("td");
var f=document.createTextNode(name);
e.appendChild(f);
a.appendChild(e);
var m=document.createElement("td");
var n=document.createTextNode(email);
m.appendChild(n);
a.appendChild(m);

var  z=document.getElementById("tbody");
z.appendChild(a);
document.getElementById("form1").reset();
}
}
}