// JavaScript Document

$("form span").hide();

passtxt = $("#pass");
emailtxt = $("#email");


function enablesubmit()
{
	if((passtxt.val().length >= 5) && (emailtxt.val() != ""))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function toenablesubmit()
{
	$("#submit").prop("disabled",!enablesubmit());	
}

function usernameevent()
{
	if(emailtxt.val().length == 0)
	{
		emailtxt.next().show();
	}
	else
	{
		emailtxt.next().hide();
	}
}

function passwordevent()
{
	if (passtxt.val().length >= 5)
	{
		passtxt.next().hide();
	}
	else
	{
		passtxt.next().show();
	}
}

emailtxt.focus(usernameevent).keyup(usernameevent).keyup(toenablesubmit);
passtxt.focus(passwordevent).keyup(passwordevent).keyup(toenablesubmit);

toenablesubmit();
