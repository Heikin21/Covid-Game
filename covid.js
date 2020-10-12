function cardTransform() {
	document.getElementById('one').style.backgroundImage = "url(covid_images/covidsample.jpeg)";
	if (document.getElementById('one').style.backgroundImage == "url(covid_images/covidsample.jpeg)") {
		return document.getElementById('one').style.backgroundImage = "url(covid_images/card_back.png)";
	}
}