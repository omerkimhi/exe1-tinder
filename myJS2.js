
$(document).ready(function () {

	count = 0;
	rules = JSON.parse(localStorage["rules"]);
	mainapp = new MainApp(user);
	mainapp.filterArr(rules);
	newProfile();
	$(".likeOrNot").click(function () { count++; newProfile(); })
	$("#return").click(function () { window.location.href = "index.html"; })

	function newProfile() {
		$("#detailsDiv").text("");
		if (count == mainapp.proArr.length) {
			$("#profileImg").attr("src", "http://cdn-webimages.wimages.net/0549fd6fd151f35f821ee9f4ab1202ed88e061-v5-wm.jpg?v=0");
			$(".likeOrNot").remove();
			$("#detailsDiv").append("No matches");
			return
		}
		$("#profileImg").attr("src", mainapp.proArr[count].image);
		$("#detailsDiv").append(mainapp.proArr[count].Render());
	}







});