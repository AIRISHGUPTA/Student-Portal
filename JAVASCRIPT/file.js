$(document).ready(function(){
	$(`.container`).hide().fadeIn(1000);
	initiateTable();
});
let check=()=>
{
	
	let a=document.getElementsByTagName(`tr`);
	let i=0;
	for(let val of a)
	{
		let row=val.firstChild.innerHTML;
		if(row==document.getElementById(`roll`).value)
		{
			return 1;
		}
	}
	return 0;
}
$(document).on('click','#btnClose',()=> {	

	document.getElementById(`btnClose`).click();
	document.getElementById(`form1`).reset();
	document.getElementById(`roll`).disabled=false;
	document.getElementById(`editBtn`).style.display=`none`;
	document.getElementById(`submitBtn`).style.display=`inline`;
});
$(document).on('click','#editBtn',()=> {	
	let name=document.getElementById(`name`).value;
	let email=document.getElementById(`email`).value;
	let pttrn1=/[a-z A-Z]+\s[a-z A-Z]+/;
	let pttrn2=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	let pttrn3=/^[0-9]{10}$/;
	if(name == ``)
	{
		window.alert(`NAME CANNOT BE NULL`);
	}		
	else if(email == ``)
	{
		window.alert(`EMAIL CANNOT BE NULL`);
	}
	else if(!pttrn1.test(name))
	{
		window.alert(`ENTER FULL NAME IN CORRECT FORMAT. \nFor Eg. 'AIRISH GUPTA'`);
	}
	else if(!pttrn2.test(email))
	{
		window.alert(`ENTER EMAIL IN CORRECT FORMAT. \nFor Eg. 'airishgupta@gmail.com'`);
	}
	else{
		let a=document.getElementsByTagName(`tr`);
		let i=1;
		for(let val of a)
		{
			let row=val.firstChild.innerHTML;
			if(row==document.getElementById(`roll`).value)
			{
				val.childNodes[1].innerHTML=document.getElementById(`name`).value;
				val.childNodes[2].innerHTML=document.getElementById(`email`).value;
			}
		}
		$(`#btnClose`).trigger(`click`);
	}
	
});
function editSetting(rollno) {
	document.getElementById(`roll`).value=parseInt(rollno);
	document.getElementById(`roll`).disabled=`true`;
	document.getElementById(`register`).click();
	document.getElementById(`editBtn`).style.display=`inline`;
	document.getElementById(`submitBtn`).style.display=`none`;
}
let delete_entry=(rollno)=>{
	let a=document.getElementsByTagName(`tr`);
	let table=document.getElementById(`table`);
	let i=0;
	
	for(let val of a)
	{
		let row=val.firstChild.innerHTML;
		if(parseInt(row)==parseInt(rollno))
		{
			table.deleteRow(i);
		}
		i++;
	}

}

$(document).on('click','#submitBtn',()=> {

	let name=document.getElementById(`name`).value;
	let email=document.getElementById(`email`).value;
	let rollno=document.getElementById(`roll`).value;
	let pttrn1=/[a-z A-Z]+\s[a-z A-Z]+/;
	let pttrn2=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	let pttrn3=/^[0-9]{10}$/;
	if(name == ``)
	{
		window.alert(`NAME CANNOT BE NULL`);
	}		
	else if(email == ``)
	{
		window.alert(`EMAIL CANNOT BE NULL`);
	}
	else if(rollno == ``)
	{
		window.alert(`ROLLNO CANNOT BE NULL`);
	}
	else if(!pttrn1.test(name))
	{
		window.alert(`ENTER FULL NAME IN CORRECT FORMAT. \nFor Eg. 'AIRISH GUPTA'`);
	}
	else if(!pttrn2.test(email))
	{
		window.alert(`ENTER EMAIL IN CORRECT FORMAT. \nFor Eg. 'airishgupta@gmail.com'`);
	}
	else if(!pttrn3.test(rollno))
	{
		window.alert(`ENTER ROLL NO IN CORRECT FORMAT (10 digits). \nFor Eg. '1510991034'`);
	}
	else{
		if(check() == 1)
		{
			window.alert(`RECORD ALREADY EXISTS`);
		}
		else{
			let a=document.createElement(`tr`);
			let b=document.createElement(`td`);
			let c=document.createTextNode(rollno);
			b.appendChild(c);
			a.appendChild(b);
			let e=document.createElement(`td`);
			let f=document.createTextNode(name);
			e.appendChild(f);
			a.appendChild(e);
			let m=document.createElement(`td`);
			let n=document.createTextNode(email);
			m.appendChild(n);
			a.appendChild(m);


			let r=document.createElement(`td`);
			let s=document.createElement(`button`);
			s.className+=`glyphicon glyphicon-edit`;
			s.addEventListener(`click`, function(){
				editSetting(rollno);
			});
			r.appendChild(s);
			a.appendChild(r);

			let u=document.createElement(`td`);
			let deleteBtn=document.createElement(`button`);
			deleteBtn.className+=`glyphicon glyphicon-remove-circle`;
			deleteBtn.addEventListener(`click`, function(){
				delete_entry(rollno);
			});
			deleteBtn.id=rollno;
			r.appendChild(deleteBtn);
			a.appendChild(u);


			let  z=document.getElementById(`tbody`);
			z.appendChild(a);
			document.getElementById(`form1`).reset();
			document.getElementById(`btnClose`).click();
		}
	}
});

function initiateTable()
{
	document.getElementById(`name`).value=`AIRISH GUPTA`;
	document.getElementById(`email`).value=`airishgupta25@gmail.com`;
	document.getElementById(`roll`).value=`1510991034`;
	$('#submitBtn').trigger('click');
	
	document.getElementById(`name`).value=`ADITYA SANGHI`;
	document.getElementById(`email`).value=`adityasanghi@gmail.com`;
	document.getElementById(`roll`).value=`1510991031`;
	$('#submitBtn').trigger('click');

	document.getElementById(`name`).value=`AKASH ATRI`;
	document.getElementById(`email`).value=`akashatri@gmail.com`;
	document.getElementById(`roll`).value=`1510991042`;
	$('#submitBtn').trigger('click');

	
	document.getElementById(`name`).value=`AMAN SINGH`;
	document.getElementById(`email`).value=`amansingh@gmail.com`;
	document.getElementById(`roll`).value=`1510991063`;
	$('#submitBtn').trigger('click');
	document.getElementById(`form1`).reset();
}
