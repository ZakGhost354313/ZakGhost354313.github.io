function displayMenu(currentMenu) {
				var thisMenu = document.getElementById(currentMenu).style
				if (thisMenu.display == "block") {
					thisMenu.display = "none"
				}
				else {
					thisMenu.display = "block"
				}
				return false;
			}
			function cookieAdd(name, value) {
				document.cookie = name+"="+value;
				return true;
			}
      let cloudflareCookie1 = cookieAdd("cloudflare-test","allowed");
/*
var target = document.getElementById("webPage");
target.innerHTML += target
*/
