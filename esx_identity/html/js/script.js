$(function() {
	$.post('http://esx_identity/ready', JSON.stringify({}));

	window.addEventListener('message', function(event) {
		if (event.data.type == "enableui") {
			document.body.style.display = event.data.enable ? "block" : "none";
		}
	});
	
	$("#register").submit(function(event) {
		event.preventDefault(); // Prevent form from submitting
		
		// Verify date
		var date = $("#dateofbirth").val();
		var dateCheck = new Date($("#dateofbirth").val());

		if (dateCheck == "Invalid Date") {
			date == "invalid";
		}
		else {
			const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateCheck)
			const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(dateCheck)
			const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateCheck)
			
			var formattedDate = `${mo}/${da}/${ye}`;

			$.post('http://esx_identity/register', JSON.stringify({
				firstname: $("#firstname").val(),
				lastname: $("#lastname").val(),
				dateofbirth: formattedDate,
				sex: $("input[type='radio'][name='sex']:checked").val(),
				height: $("#height").val()
			}));
		}
	});
});


var layerCount = 5;
var starCount = 400;
var maxTime = 30;
var universe = document.getElementById("universe");
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = w.innerHeight || e.clientHeight || g.clientHeight;
for (var i = 0; i < starCount; ++i) {
  var ypos = Math.round(Math.random() * height);
  var star = document.createElement("div");
  var speed = 6000 * (Math.random() * maxTime + 1);
  star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
  star.style.backgroundColor = "white";

  universe.appendChild(star);
  star.animate(
    [
      {
        transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: 1000
    }
  );
}

// var elem = document.querySelector(".pulse");
// var animation = elem.animate(
//   {
//     opacity: [0.5, 1],
//     transform: ["scale(0.5)", "scale(1)"]
//   },
//   {
//     direction: "alternate",
//     duration: 500,
//     iterations: Infinity
//   }
// );

