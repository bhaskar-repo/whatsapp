function myFunction(divName) {
	var x,y,z;
    if("chatDiv" == divName) {
    	x = document.getElementById("statusDiv");
    	y = document.getElementById("callsDiv")
    }
    else if ("statusDiv" == divName) {
    	x = document.getElementById("chatDiv");
    	y = document.getElementById("callsDiv")
    }
    else {
    	x = document.getElementById("chatDiv");
    	y = document.getElementById("statusDiv");
    }

    z = document.getElementById(divName);
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
   	document.getElementById("chatTop").style.display = "none";
   	document.getElementById("chatArea").style.display = "none";
   	document.getElementById("statusTop").style.display = "none";
   	document.getElementById("statusArea").style.display = "none";
   	document.getElementById("top-fixed").style.display = "flex";
    document.getElementById("mainDiv").style.display = "flex";
}

function imgProfileChange (url) {
	document.getElementById("profileImg").src = url;
}

function chatImgChange (url,name,lastseen) {
	document.getElementById("chatTop").style.display = "flex";
  document.getElementById("chatArea").style.display = "flex";
  document.getElementById("mainDiv").style.display = "none";
  document.getElementById("chatDiv").style.display = "none";
  document.getElementById("top-fixed").style.display = "none";
	document.getElementById("chatImg").src = url;
	document.getElementById("name").innerHTML = name;
	document.getElementById("lastseen").innerHTML = lastseen;
}

function statusImgChange (url,name,lastseen) {
	document.getElementById("statusTop").style.display = "flex";
  document.getElementById("statusArea").style.display = "flex";
  document.getElementById("statusDiv").style.display = "none";
  document.getElementById("top-fixed").style.display = "none";
	document.getElementById("statusImg").src = url;
  document.getElementById("mainDiv").style.display = "none";
	document.getElementById("statusName").innerHTML = name;
	document.getElementById("statusLastSeen").innerHTML = lastseen;
}
