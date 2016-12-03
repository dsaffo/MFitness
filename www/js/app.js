

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
            Test(page);
            Modules(page);
        }
        
        
        //Home Page
        function onsHome(page){
            var menu = document.getElementById('mm');
            
            if (page.id == 'home'){
                
                onsNav(page);
                
            }
            
            menu.addEventListener('click', function(event){
                event.preventDefault();
                var url = this.getAttribute('url');
                console.log("menu link = "+ url);
				content.load(url)
                
            }, false);
           
            StopWatchModule();
           
        }
        
        function onsNav(page) {
			if (page.id === 'home') {
    		page.querySelector('#mb').ondblclick = function() {
      		document.querySelector('#navigator').pushPage('test.html', {data: {title: 'Test'}});
    		};
    		page.querySelector('#settings').onclick = function() {
      		document.querySelector('#navigator').pushPage('modules.html', {data: {title: 'Modules'}});
    		};
  		} else if (page.id === 'test') {
    		page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
				console.log("page title = "+ page.data.title);
  		}
        else if (page.id === 'modules') {
    		page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
				console.log("page title = "+ page.data.title);
  		}
		}
        
        function StopWatchModule(){
            var state = 1;
            
            document.getElementById('mb').onclick = function(){
                setTimeout (function(){
                if (state == 1){
                    document.getElementById('mm').innerHTML = 'hi';
                    state = 2;
                }
                else{
                    document.getElementById('mm').innerHTML = 'C';
                    state = 1;
                }
                },370);
            };
            
          
            
        }
        
        function Test(page) {
		//note save handler - check create note page is active...
		if (page.id === "test") {
			console.log("ready to save note...");
            
            }
        }
        
         function Modules(page) {
		//note save handler - check create note page is active...
		if (page.id === "modules") {
			console.log("ready to save note...");
            
            }
        }
        document.addEventListener('init', onsInit, false);

    }, false);
})();