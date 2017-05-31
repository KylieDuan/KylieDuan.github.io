

		var exampleSocket = new WebSocket("ws://130.140.130.128:49999/test","json");
		window.onload = function(){getListOfPatient(exampleSocket)};
		
		var patientData = [];
		var filteredData = [];
		exampleSocket.onmessage = function(event){
			 var msg = JSON.parse(event.data);
			 
			 switch(msg.commandName) {
			    case "Patient Read":
			    		
			    		patientData = msg.data;
			    		//alert(patientData);
			    		
			    		filteredData = JSON.parse(JSON.stringify(patientData));
			    	
			    		alert(filteredData);
			    		var n = 0;
			    		for (var key in filteredData){ 
			    			
			    			// alert(key + " -> " + patientData[key]);
			    			var patientObj = filteredData[key];
			    			
			    			var individualData = "<table border=0 align=center width=100%>"
			    				+
			    				"<tr><td width=22%><b>Dataset ID:</b>"+ n + "</td><td width=24%><b>Software Version:</b> GEMINI </td><td width=20%><b>Patient Type:</b> </td><td width=22%><b>Dataset Size:</b> 1.5 GB</td><td width=12% rowspan=4 colspan = 40 style= \" text-align:center\" ><img src= 'Images/noimage.png' width=100 height=100></td></tr>"
			    				+
			    				"<tr><td><b>Acq Protocol:</b> </td><td><b>Acq Datetime:</b> 2009-06-25 12:59:22</td><td><b>Acq Type:</b> Pulmonary</td><td><b>Submitted By:</b> </td></tr>"
			    				+
			    				"<tr><td><b>Patient Name:</b>"+ patientObj.name + "</td><td><b>Patient ID:</b> 209lbs</td><td><b>Study ID:</b> 3766</td><td><b>Submission Date:</b> 2013-05-28</td></tr>"		
			    				+
								"<tr><td colspan=4><b>Dataset Description:</b> </td><td></td></tr>"
								+
								"<tr><td colspan=5><a id = \"moreinfo_"+ n +"_link\" href=\"javascript:showMoreInfo('moreinfo_"+ n +"')\">View More Information</a></td></tr>"
								+
								"<tbody id='moreinfo_"+ n +"' style= 'display: none'>"
								+
								"<tr><td><b>Patient Weight:</b> 95</td><td><b>Patient Height:</b> 1.60</td><td><b>Patient Sex:</b>" + patientObj.sex + "</td><td><b>Disease:</b> </td></tr>"
								+
								"<tr><td><b>Bed Positions:</b> 0</td><td><b>Dynamic Frames:</b> 0</td><td><b>Pulmonary Phases:</b> 7</td><td><b>Field of View: </b> 576</td></tr>"
								+
								"<tr><td><b>Isotope:</b> F18</td><td colspan=2><b>Radiopharmaceutical:</b> Fluorodeoxyglucose (F18)</td><td><b>Listfile Size:</b> 920.87 MB</td><td></td></tr>"
								+
								"<tr><td colspan=5><b>Tags:</b> [<a href='search.php?clear=yes&tag=Recon_Rubik_Benchmark'>Recon_Rubik_Benchmark</a>]</td></tr></tbody>"
							//	+
								//"<tr><td><b>[<a href='#' onclick='setDownloadId('" + n +"')' >Download</a>] [<a href='feedback.php?datasetid=" + n + "'>Send Feedback</a>]</b></td><td><b>Total Downloads:</b> 10</td><td><b>Last Download:</b> 2015-12-15</td><td></td><td></td></tr>					
			    				+
			    				"</table> ";			
			    				
			    			  // if (key == "name") doSomething();
							//	alert(patientObj.age);
			    			  var x=document.getElementById("bigTable").insertRow(1);
			    			    var c1=x.insertCell(0);
			    			    var c2=x.insertCell(1);	
			    			 //   var c3= x.insertCell(2);
			    			    var checkBox = "<input id = 'dataset_select_" + n +" "+ " name='dataset_select_" + n +" "+ "type='checkbox' value=" + n + " >";
			    			    var image = "<img src='Images/noimage.png' width=75 height=75>"
			    			    //var patientInfo = 
			    			    c1.innerHTML= checkBox;
			    			    c2.innerHTML= individualData;
			    			  //  c3.innerHTML = image;
			    			    filteredData[key].datasetID = n;
			    			    n++;

			    			}
			    	
			      		break;
			    case "New File":
					   
				      break;
				case "Progress Bar":
					
					var individualProgress = msg.data;
					
					 individualProgress.
	
				      break;
			  }

		}

		
function updateTable(){
	
	
	
}
		
function submitFilter(){
	filteredData = [];
	var userInput = document.getElementById('filter_patientname').value;

	var filter = {};
	filter.name = userInput;
	
	var tb = document.getElementById("bigTable");
	while(tb.rows.length > 1) {
		tb.deleteRow(1);
	}
	
	filteredData.length = 0;
	for (var key in patientData){
		
		if(patientData[key].name == filter.name){
			filteredData[key] = patientData[key];
			alert(filteredData[key].name);
		}
	}
	

	

	for (var key in filteredData){ 
		
		// alert(key + " -> " + patientData[key]);
		var patientObj = filteredData[key];
		
		var individualData = "<table border=0 align=center width=100%>"
			+
			"<tr><td width=27%><b>Dataset ID:</b>"+ patientObj.datasetID + "</td><td width=25%><b>Software Version:</b> GEMINI 9.5 (Rubik)</td><td width=18%><b>Patient Type:</b> </td><td width=22%><b>Dataset Size:</b> 1.5 GB</td><td width=8% rowspan=4><img src= 'noimage.jpg' width=75 height=75></td></tr>"
			+
			"<tr><td><b>Acq Protocol:</b> </td><td><b>Acq Datetime:</b> 2009-06-25 12:59:22</td><td><b>Acq Type:</b> Pulmonary</td><td><b>Submitted By:</b> </td></tr>"
			+
			"<tr><td><b>Patient Name:</b>"+ patientObj.name + "</td><td><b>Patient ID:</b> 209lbs</td><td><b>Study ID:</b> 3766</td><td><b>Submission Date:</b> 2013-05-28</td></tr>"		
			+
			"<tr><td colspan=4><b>Dataset Description:</b> </td><td></td></tr>"
			+
			"<tr><td colspan=5><a id = \"moreinfo_"+ patientObj.datasetID  +"_link\" href=\"javascript:showMoreInfo('moreinfo_"+ patientObj.datasetID  +"')\">View More Information</a></td></tr>"
			+
			"<tbody id='moreinfo_"+ patientObj.datasetID  +"' style= 'display: none'>"
			+
			"<tr><td><b>Patient Weight:</b> 95</td><td><b>Patient Height:</b> 1.60</td><td><b>Patient Sex:</b>" + patientObj.sex + "</td><td><b>Disease:</b> </td></tr>"
			+
			"<tr><td><b>Bed Positions:</b> 0</td><td><b>Dynamic Frames:</b> 0</td><td><b>Pulmonary Phases:</b> 7</td><td><b>Field of View: </b> 576</td></tr>"
			+
			"<tr><td><b>Isotope:</b> F18</td><td colspan=2><b>Radiopharmaceutical:</b> Fluorodeoxyglucose (F18)</td><td><b>Listfile Size:</b> 920.87 MB</td><td></td></tr>"
			+
			"<tr><td colspan=5><b>Tags:</b> [<a href='search.php?clear=yes&tag=Recon_Rubik_Benchmark'>Recon_Rubik_Benchmark</a>]</td></tr></tbody>"
		//	+
			//"<tr><td><b>[<a href='#' onclick='setDownloadId('" + n +"')' >Download</a>] [<a href='feedback.php?datasetid=" + n + "'>Send Feedback</a>]</b></td><td><b>Total Downloads:</b> 10</td><td><b>Last Download:</b> 2015-12-15</td><td></td><td></td></tr>					
			+
			"</table> ";			
			
		  // if (key == "name") doSomething();
		//	alert(patientObj.age);
		
				
		  var x=document.getElementById("bigTable").insertRow(1);
		    var c1=x.insertCell(0);
		    var c2=x.insertCell(1);			    			   
		    var checkBox = "<input id = 'dataset_select_" + patientObj.datasetID  +" "+ " name='dataset_select_" + patientObj.datasetID  +" "+ "type='checkbox' value=" + patientObj.datasetID  + " >";
		    
		    //var patientInfo = 
		    c1.innerHTML= checkBox;
		    c2.innerHTML= individualData;  
		}
}


function noenter ()
{
    return !( window.event && window.event.keyCode == 13);
}


function getListOfPatient(exampleSocket){
	
	 var msg = {
			    appName: "reconGUI",
			    commandName: "READ",
			    type:  "text",
			    date:""
			  };
	
/*
	
		exampleSocket.onmessage = function(event) {
			//  var f = document.getElementById("chatbox").contentDocument;
			//  var text = "";
			
			  var msg = JSON.parse(event.data);
			  alert(event);
			  var patientData = JSON.parse(msg.data);
			  switch(msg.commandName) {
			    case "GUIStringsReply":
			     alert("listener success");
			      break;
			 
			    case "New File":
			   
			      break;
			    case "Recon Sent":
			    
			      }
			     
			      break;
			  }
			  
		
			};
			*/
			 exampleSocket.send(JSON.stringify(msg));	
			
	
}


  


function startCheckedRecon(frm){
	
	 var msg = {
			    appName: "reconGUI",
			    commandName: "MULTIPLE RECON",
			    type:  "Text",
			    data: null
			  };
	 
	var frm = document.getElementById(frm);
	
	var checkedPatientObj = {};
	
	var inputs = frm.getElementsByTagName('input');

	var reconids = [];
	var index = 0;
    // for each input in the form, check if it is a checkbox
    for (var i = 0; i < inputs.length; i++) 
	{
        if (inputs[i].type == "checkbox") 
		{
        
			if(inputs[i].checked == true)
			{
				
				reconids.push(inputs[i].value);
				
			}
		}
	}
	//alert(outputs.length);
	
	if(reconids.length>0)
		
	{
		for (var key in filteredData){
					
				
				
				for(var i = 0; i < reconids.length; i++){
					
					if(filteredData[key].datasetID == reconids[i]){
						
						checkedPatientObj[key] = filteredData[key];
						alert(checkedPatientObj[key].datasetID);
					}
				}
				
			
		}
		
		msg.data = checkedPatientObj;
		exampleSocket.send(JSON.stringify(msg));
	}
	else
	{
		
		alert("Please select at least 1 dataset and try again.");
	}
	
	
}





function showFilters(id)
{
	var tbody = document.getElementById(id);
	var img = document.getElementById(id+"_img");
	if(tbody.style.display == "")
	{
		tbody.style.display = "none";
		img.src = "../img/but_gooff.gif";
	}
	else
	{
		tbody.style.display = "";
		img.src = "../img/rs_arrow.gif";
	}
}
function showMoreInfo(id)
{
	var tbody = document.getElementById(id);
	var link = document.getElementById(id+"_link");
	if(tbody.style.display == "")
	{
		tbody.style.display = "none";
		link.innerHTML = "View More Information";
	}
	else
	{
		tbody.style.display = "";
		link.innerHTML = "View Less Information";
	}
}
function submitFilters()
{
	document.getElementById('filterForm').submit();
}

function checkAll(frm, checkedOn) 
{
    // have we been passed an ID
    frm = document.getElementById(frm);

    // Get all of the inputs that are in this form
    var inputs = frm.getElementsByTagName('input');
    // for each input in the form, check if it is a checkbox
    for (var i = 0; i < inputs.length; i++) 
	{
        if (inputs[i].type == "checkbox") 
		{
            inputs[i].checked = checkedOn;
        }
    }
}

function DownloadChecked(frm)
{
	//alert("Download Checked");
	var alink = document.getElementById('downloadchecked');
	var frm = document.getElementById(frm);
	var inputs = frm.getElementsByTagName('input');
	var downloadids = [];
    // for each input in the form, check if it is a checkbox
    for (var i = 0; i < inputs.length; i++) 
	{
        if (inputs[i].type == "checkbox") 
		{
			//alert(inputs[i].checked);
			if(inputs[i].checked == true)
			{
				downloadids.push(inputs[i].value);
			}
		}
	}
	//alert(outputs.length);
	if(downloadids.length>0)
	{
		/*var link = "downloadDataset.php?";
		for (var j = 0; j < outputs.length; j++)
		{
			if(j==0)
				link = link+"id[]="+outputs[j];
			else
				link = link+"&id[]="+outputs[j];
		}
		alink.href = link;*/
		downloadOptions('show');
	}
	else
	{
		alink.href = "#";
		alert("Please select at least 1 dataset and try again.");
	}
}
function setDownloadId(id)
{
	downloadids = [];
	downloadids.push(id);
	downloadOptions('show');
}
function downloadOptions(action) 
{ 
	var page=document.getElementById('fadePage');
	var options=document.getElementById('downloadoptions');

	if(action=="show")
	{
		page.style.opacity = 0.5;
		//page.style.filter = 'alpha(opacity=50)';
		options.style.visibility="visible";
	} 
	else if(action=="hide")
	{   
		page.style.opacity = 1.0;
		//page.style.filter = 'alpha(opacity=100)';
		options.style.visibility="hidden";
	}
}
function startDownload()
{
	var format = document.getElementById('download_format');
	var frm = document.getElementById('form_downloadoptions');
	var inputs = frm.getElementsByTagName('input');
	var misc = document.getElementById('download_cb_misc');
	var func_group = document.getElementById('func_group');
	var i = 0;
	if(downloadids.length>0)
	{
		var link = "downloadDataset.php?";
		for (i = 0; i < downloadids.length; i++) 
		{
			if(i==0)
				link = link+"id[]="+downloadids[i];
			else
				link = link+"&id[]="+downloadids[i];
		}
		for (var i = 0; i < inputs.length; i++) 
		{
			if (inputs[i].type == "checkbox") 
			{
				if(inputs[i].checked == true && inputs[i].value!='on')	//if the checkbox is checked and has a non-default value associated with it
				{
					link = link+"&formattype[]="+inputs[i].value;
				}
			}
		}
		if(format.value=='PRS')
		{
			link = link+"&format=PRS";
		}
		else if(format.value=='Ingenuity')
		{
			link = link+"&format=Ingenuity";
		}
		if(misc.checked==true)
		{
			link = link+"&misc=true";
		}
		else
		{
			link = link+"&misc=false";
		}
		link = link+"&group="+func_group.value;
		window.location=link;
	}
	downloadOptions('hide');
}
