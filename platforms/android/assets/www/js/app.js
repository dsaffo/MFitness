

(function(){
    
    document.addEventListener('deviceready', function(event){
        event.preventDefault();
        console.log("cordova checked...device ready");
        
        //Android buttons
        
        // disable or enable hardware backbutton on Android
		ons.disableDeviceBackButtonHandler();
		//ons.enableDeviceBackButtonHandler();

		// set custom backbutton handler
		ons.setDefaultDeviceBackButtonListener(function(event) {
  		ons.notification.confirm('Exit app?') // check with user
  		.then(function(index) {
    		if (index === 1) { // 'ok' button
      		navigator.app.exitApp(); // default behaviour - exit app
    		}
  		});
		});
        
        //call page to dom
        function onsInit(event){
            var page = event.target;
            console.log("page-event=" + page.id);
            
            onsHome(page);
            Detail(page);
            Modules(page);
            Add(page);
            
        }
        
        var module1, module2, module3, module4, module5;
        var modulelPos, moduleTaped;
        var m;
        
       // m = "CalCon"
        //Home Page
        function onsHome(page){
            
            
            if (page.id == 'home'){
                
                
              
               
              //  DetailContent("CalCon");
                
                onsNav(page);
                
                page.querySelector('#tlb').ondblclick = function() {
                m = module1;
                document.querySelector('#navigator').pushPage('detailed.html', 
                {data: {title: 'Detailed View'}});
            };
                
                page.querySelector('#trb').ondblclick = function() {
                m = module2;
                document.querySelector('#navigator').pushPage('detailed.html', 
                {data: {title: 'Detailed View'}});
            };
                
                page.querySelector('#mb').ondblclick = function() {
                m = module3;
                document.querySelector('#navigator').pushPage('detailed.html', 
                {data: {title: 'Detailed View'}});
            };
                
                page.querySelector('#blb').ondblclick = function() {
                m = module4;
                document.querySelector('#navigator').pushPage('detailed.html', 
                {data: {title: 'Detailed View'}});
            };
                
                page.querySelector('#brb').ondblclick = function() {
                m = module5;
                document.querySelector('#navigator').pushPage('detailed.html', 
                {data: {title: 'Detailed View'}});
            };
            }
        }
        
        function mSelect (Bname, name, pos, func){
            document.getElementById(Bname).onclick = function(){
                    if (module2 != name && module3 != name && module4 != name && module5 != name){
                    module1 = name;
                    window[func](pos);
                    }
                };
        }
        
        function alertDismissed() {
           //empty
        }
          function Modules(page) {
		//note save handler - check create note page is active...
		if (page.id === "modules") {
		  onsNav(page);	
        }
            
            if(page.id === "m1"){
                

                document.getElementById("speedB").onclick = function(){
                    if (module2 != "speed" && module3 != "speed" && module4 != "speed" && module5 != "speed"){
                    module1 = "speed";
                    Speed("tlb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("calconB").onclick = function(){
                    if (module2 != "calcon"  && module3 != "calcon" && module4 != "calcon" && module5 != "calcon"){
                    module1 = "calcon";
                    CalCon("tlb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("heartrateB").onclick = function(){
                    if (module2 != "heartrate"  && module3 != "heartrate" && module4 != "heartrate" && module5 != "heartrate"){
                    module1 = "heartrate";
                    HeartRate("tlb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("distanceB").onclick = function(){
                    if (module2 != "distance" && module3 != "distance" && module4 != "distance" && module5 != "distance"){
                    module1 = "distance";
                    Distance("tlb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                 document.getElementById("hornB").onclick = function(){
                    if (module2 != "horn" && module3 != "horn" && module4 != "horn" && module5 != "horn"){
                    module1 = "horn";
                    Horn("tlb");
                    }
                     else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                 document.getElementById("calburnB").onclick = function(){
                    if (module2 != "calburn" && module3 != "calburn" && module4 != "calburn" && module5 != "calburn"){
                    module1 = "calburn";
                    CalBurn("tlb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }

                };
               
               document.getElementById("workoutB").onclick = function(){
                    if (module2 != "workout" && module3 != "workout" && module4 != "workout" && module5 != "workout"){
                    module1 = "workout";
                    Workout("tlb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                document.getElementById("musicB").onclick = function(){
                    if (module2 != "music" && module3 != "music" && module4 != "music" && module5 != "music"){
                    module1 = "music";
                    Music("tlb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
            }
            
            if(page.id === "m2"){
               
                 document.getElementById("speedB2").onclick = function(){
                    if (module1 != "speed" && module3 != "speed" && module4 != "speed" && module5 != "speed"){
                    module2 = "speed";
                    Speed("trb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("calconB2").onclick = function(){
                    if (module1 != "calcon"  && module3 != "calcon" && module4 != "calcon" && module5 != "calcon"){
                    module2 = "calcon";
                    CalCon("trb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("heartrateB2").onclick = function(){
                    if (module1 != "heartrate"  && module3 != "heartrate" && module4 != "heartrate" && module5 != "heartrate"){
                    module2 = "heartrate";
                    HeartRate("trb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("distanceB2").onclick = function(){
                    if (module1 != "distance" && module3 != "distance" && module4 != "distance" && module5 != "distance"){
                    module2 = "distance";
                    Distance("trb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                 document.getElementById("hornB2").onclick = function(){
                    if (module1 != "horn" && module3 != "horn" && module4 != "horn" && module5 != "horn"){
                    module2 = "horn";
                    Horn("trb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                 document.getElementById("calburnB2").onclick = function(){
                    if (module1 != "calburn" && module3 != "calburn" && module4 != "calburn" && module5 != "calburn"){
                    module2 = "calburn";
                    CalBurn("trb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
               
               document.getElementById("workoutB2").onclick = function(){
                    if (module1 != "workout" && module3 != "workout" && module4 != "workout" && module5 != "workout"){
                    module2 = "workout";
                    Workout("trb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                document.getElementById("musicB2").onclick = function(){
                    if (module1 != "music" && module3 != "music" && module4 != "music" && module5 != "music"){
                    module2 = "music";
                    Music("trb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
              
            }

             if(page.id === "m3"){
               
                 document.getElementById("speedB3").onclick = function(){
                    if (module1 != "speed" && module2 != "speed" && module4 != "speed" && module5 != "speed"){
                   module3 = "speed";
                    Speed("mb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("calconB3").onclick = function(){
                    if (module1 != "calcon"  && module2 != "calcon" && module4 != "calcon" && module5 != "calcon"){
                    module3 = "calcon";
                    CalCon("mb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("heartrateB3").onclick = function(){
                    if (module1 != "heartrate"  && module2 != "heartrate" && module4 != "heartrate" && module5 != "heartrate"){
                    module3 = "heartrate";
                    HeartRate("mb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("distanceB3").onclick = function(){
                    if (module1 != "distance" && module2 != "distance" && module4 != "distance" && module5 != "distance"){
                    module3 = "distance";
                    Distance("mb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }

                };
                
                 document.getElementById("hornB3").onclick = function(){
                    if (module1 != "horn" && module2 != "horn" && module4 != "horn" && module5 != "horn"){
                    module3 = "horn";
                    Horn("mb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                 document.getElementById("calburnB3").onclick = function(){
                    if (module1 != "calburn" && module2 != "calburn" && module4 != "calburn" && module5 != "calburn"){
                    module3 = "calburn";
                    CalBurn("mb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
               
               document.getElementById("workoutB3").onclick = function(){
                    if (module1 != "workout" && module2 != "workout" && module4 != "workout" && module5 != "workout"){
                    module3 = "workout";
                    Workout("mb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                document.getElementById("musicB3").onclick = function(){
                    if (module1 != "music" && module2 != "music" && module4 != "music" && module5 != "music"){
                    module3 = "music";
                    Music("mb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                }; 

                document.getElementById("stopwatchB3").onclick = function(){
                    
                    module3 = "stopwatch";
                    StopWatch("mb");
                    
                };
              
            }
            
            if(page.id === "m4"){
               
                 document.getElementById("speedB4").onclick = function(){
                    if (module1 != "speed" && module2 != "speed" && module3 != "speed" && module5 != "speed"){
                   module4 = "speed";
                    Speed("blb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("calconB4").onclick = function(){
                    if (module1 != "calcon"  && module2 != "calcon" && module3 != "calcon" && module5 != "calcon"){
                    module4 = "calcon";
                    CalCon("blb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("heartrateB4").onclick = function(){
                    if (module1 != "heartrate"  && module2 != "heartrate" && module3 != "heartrate" && module5 != "heartrate"){
                    module4 = "heartrate";
                    HeartRate("blb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("distanceB4").onclick = function(){
                    if (module1 != "distance" && module2 != "distance" && module3 != "distance" && module5 != "distance"){
                    module4 = "distance";
                    Distance("blb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                 document.getElementById("hornB4").onclick = function(){
                    if (module1 != "horn" && module2 != "horn" && module3 != "horn" && module5 != "horn"){
                    module4 = "horn";
                    Horn("blb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                 document.getElementById("calburnB4").onclick = function(){
                    if (module1 != "calburn" && module2 != "calburn" && module3 != "calburn" && module5 != "calburn"){
                    module4 = "calburn";
                    CalBurn("blb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
               
               document.getElementById("workoutB4").onclick = function(){
                    if (module1 != "workout" && module2 != "workout" && module3 != "workout" && module5 != "workout"){
                    module4 = "workout";
                    Workout("blb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                document.getElementById("musicB4").onclick = function(){
                    if (module1 != "music" && module2 != "music" && module3 != "music" && module5 != "music"){
                    module4 = "music";
                    Music("blb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                }; 

                
              
            }

             if(page.id === "m5"){
               
                 document.getElementById("speedB5").onclick = function(){
                    if (module1 != "speed" && module2 != "speed" && module3 != "speed" && module4 != "speed"){
                   module5 = "speed";
                    Speed("brb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("calconB5").onclick = function(){
                    if (module1 != "calcon"  && module2 != "calcon" && module3 != "calcon" && module4 != "calcon"){
                    module5 = "calcon";
                    CalCon("brb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("heartrateB5").onclick = function(){
                    if (module1 != "heartrate"  && module2 != "heartrate" && module3 != "heartrate" && module4 != "heartrate"){
                    module5 = "heartrate";
                    HeartRate("brb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                document.getElementById("distanceB5").onclick = function(){
                    if (module1 != "distance" && module2 != "distance" && module3 != "distance" && module4 != "distance"){
                    module5 = "distance";
                    Distance("brb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
                
                 document.getElementById("hornB5").onclick = function(){
                    if (module1 != "horn" && module2 != "horn" && module3 != "horn" && module4 != "horn"){
                    module5= "horn";
                    Horn("brb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                 document.getElementById("calburnB5").onclick = function(){
                    if (module1 != "calburn" && module2 != "calburn" && module3 != "calburn" && module4 != "calburn"){
                    module5 = "calburn";
                    CalBurn("brb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };
               
               document.getElementById("workoutB5").onclick = function(){
                    if (module1 != "workout" && module2 != "workout" && module3 != "workout" && module4 != "workout"){
                    module5 = "workout";
                    Workout("brb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                };

                document.getElementById("musicB5").onclick = function(){
                    if (module1 != "music" && module2 != "music" && module3 != "music" && module4 != "music"){
                    module5 = "music";
                    Music("brb");
                    }
                    else{
                        navigator.notification.alert( 'Module already selected.', alertDismissed,'MFitness', 'OK');
                    }
                }; 

                
              
            }
            
        }
        
        
        
        
        function onsNav(page) {
			if (page.id === 'home') {
    		
    		page.querySelector('#settings').onclick = function() {
      		document.querySelector('#navigator').pushPage('modules.html', {data: {title: 'Modules'}});
    		};
  		} else if (page.id === 'detailed') {
    		page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
				console.log("page title = "+ page.data.title);
           
  		}
        else if (page.id === 'add'){
            page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
				console.log("page title = "+ page.data.title);
        }
        else if (page.id === 'modules') {
    		page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
				console.log("page title = "+ page.data.title);
  		}
		}
        
        function StopWatch(){
            var state = 1;
            var seconds = 0;
             document.getElementById('mm').innerHTML = '0';
            document.getElementById('mb').onclick = function(){
                setTimeout (function(){
                if (state == 1){
                     //setInterval (function(){
                       // seconds ++;
                    //document.getElementById('mm').innerHTML = seconds;
                   
                     //},100);
                    state = 2;
                }
                else{
                    document.getElementById('mm').innerHTML = seconds;
                    state = 1;
                }
                },370);
            };
            
          
            
        }
       
        
        function CalCon(MPos){
           
            
            var TotalCal = 2000;
            var CalConsumed = 1500;
            var state = 1;
           
            var myNode = document.getElementById(MPos);
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
               }
            var textnode = document.createElement("span");   
            textnode.className  += " module-text";
            textnode.id += "cal";
            textnode.innerHTML = CalConsumed;                          
            document.getElementById(MPos).appendChild(textnode); 
            state = 2;
            
            
            document.getElementById(MPos).onclick = function(){
           
            if (state == 1){
                document.getElementById("cal").innerHTML = CalConsumed;      
                state = 2;
                }
                
            else{
                document.getElementById("cal").innerHTML = TotalCal - CalConsumed;                          
                state =1;
            }
            };
           
            
        }
        
        //TODO 
        //Speed Skeleton
        function Speed(MPos){
         
              var myNode = document.getElementById(MPos);
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
               }
            //place holder
            var node = document.createElement("span");
            node.className += " module-text";
            node.innerHTML = "Speed";  
            document.getElementById(MPos).appendChild(node); 
            //code here
          
        
        }
        
        function HeartRate(MPos){
         
            var myNode = document.getElementById(MPos);
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
               }
              
            var node = document.createElement("span");
            node.className += " module-text";
            node.innerHTML = "HR";  
            document.getElementById(MPos).appendChild(node);   
          
        
        }
        
          //TODO 
        //WorkOut Skeleton
        function Workout(MPos){
         
              var myNode = document.getElementById(MPos);
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
               }
            //place holder
            var node = document.createElement("span");
            node.className += " module-text";
            node.innerHTML = "WO";  
            document.getElementById(MPos).appendChild(node); 
            //code here
          
        
        }
        
          //TODO 
        //Music Skeleton
        function Music(MPos){
         
              var myNode = document.getElementById(MPos);
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
               }
            //place holder
            var node = document.createElement("span");
            node.className += " module-text";
            node.innerHTML = "Music";  
            document.getElementById(MPos).appendChild(node); 
            //code here
          
        
        }
        
          //TODO 
        //CalBurn Skeleton
        function CalBurn(MPos){
         
              var myNode = document.getElementById(MPos);
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
               }
            //place holder
            var node = document.createElement("span");
            node.className += " module-text";
            node.innerHTML = "CalBurn";  
            document.getElementById(MPos).appendChild(node); 
            //code here
          
        
        }
        
          //TODO 
        //Distance Skeleton
        function Distance(MPos){
         
              var myNode = document.getElementById(MPos);
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
               }
            //place holder
            var node = document.createElement("span");
            node.className += " module-text";
            node.innerHTML = "Distance";  
            document.getElementById(MPos).appendChild(node); 
            //code here
            
        }
        
          //TODO 
        //Horn Skeleton
        function Horn(MPos){
         
              var myNode = document.getElementById(MPos);
            while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
               }
            //place holder
            var node = document.createElement("span");
            node.className += " module-text";
            node.innerHTML = "Horn";  
            document.getElementById(MPos).appendChild(node); 
            //code here
           
          
        
        }
        
        
        
        
        
        
        
        function Detail(page) {
		//note save handler - check create note page is active...
            if (page.id === "detailed") {
                console.log("ready to save note...");
                onsNav(page);
                
                if (m == "calcon"){
                    page.querySelector('ons-toolbar .center').innerHTML = "Daily Calories";
                    
                      var node = document.createElement("ons-input");           node.style.width = "100%"; node.style.marginTop = "30px";
                    node.setAttribute("placeholder", "Total Daily Calories");
                     document.getElementById("details").appendChild(node);
                    
                    var add = document.createElement("ons-icon");
                    add.setAttribute("size", "30px");
                    add.setAttribute("icon", "fa-plus-square");
                    add.id = "add"
                    add.style.color ="#ff3030"; add.style.color = "margin-left: 5px; margin-top: 10px";
                    document.getElementById("details").appendChild(add);
                    
                    document.getElementById("add").onclick = function(){
                     var node2 = document.createElement("ons-input");           node2.style.width = "100%"; node2.style.marginTop = "30px";
                    node2.setAttribute("placeholder", "Calories");
                     document.getElementById("details").insertBefore(node2,document.getElementById("add"));
                    };
                }
                
                if(m == "speed"){
                     page.querySelector('ons-toolbar .center').innerHTML = "Speed";
                    //code here
                }
                
                 if(m == "distance"){
                     page.querySelector('ons-toolbar .center').innerHTML = "Distance";
                     //code here
                }
                
                if(m == "horn"){
                     page.querySelector('ons-toolbar .center').innerHTML = "Horn";
                     //code here
                }
                
                if(m == "heartrate"){
                     page.querySelector('ons-toolbar .center').innerHTML = "Heart Rate";
                     //code here
                }
                
                if(m == "calburn"){
                     page.querySelector('ons-toolbar .center').innerHTML = "Calories Burned";
                     //code here
                }
                
                if(m == "workout"){
                     page.querySelector('ons-toolbar .center').innerHTML = "Workout";
                     //code here
                }
                
                if(m == "music"){
                     page.querySelector('ons-toolbar .center').innerHTML = "Music";
                     //code here
                }
                
                if(m == "stopwatch"){
                     page.querySelector('ons-toolbar .center').innerHTML = "Stopwatch";
                     //code here
                }
            }
        }
        
        
        
        function Add(page){
            if (page.id === "add"){
              
                if (m == "CalCon"){
                    page.querySelector('ons-toolbar .center').innerHTML = "Daily Calories";
                    
                   

                }
                
            }
             
        }  
        
       
        document.addEventListener('init', onsInit, false);

    }, false);
})();