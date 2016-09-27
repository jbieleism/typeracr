var myParagraphs = [

"Echo park photo booth selvage before they sold out bitters. Polaroid yuccie next level butcher, mlkshk raw denim whatever migas try-hard dreamcatcher flexitarian. Williamsburg vinyl single-origin coffee, man bun organic cliche 3 wolf moon helvetica meditation. Butcher 8-bit sriracha celiac banh mi. Chicharrones gastropub heirloom listicle gentrify. Thundercats brunch poutine truffaut leggings, farm-to-table 8-bit. Dreamcatcher umami mixtape, chartreuse pitchfork drinking vinegar small batch shoreditch master cleanse.",
"There is an ongoing debate on the extent to which the writing of programs is an art form, a craft, or an engineering discipline. In general, good programming is considered to be the measured application of all three, with the goal of producing an efficient and evolvable software solution (the criteria for 'efficient' and 'evolvable' vary considerably). The discipline differs from many other technical professions in that programmers, in general, do not need to be licensed or pass any standardized (or governmentally regulated) certification tests in order to call themselves 'programmers' or even 'software engineers.'",
"Raw denim cray vegan biodiesel, kombucha gentrify everyday carry hashtag four dollar toast. Lomo trust fund butcher schlitz, helvetica VHS dreamcatcher before they sold out poutine biodiesel cornhole wolf lumbersexual deep v keffiyeh. Bushwick banh mi hammock chicharrones, intelligentsia fap mixtape meggings wolf letterpress asymmetrical street art. Chillwave swag pop-up street art, chartreuse yuccie 3 wolf moon. Gluten-free dreamcatcher fixie keytar, ramps post-ironic meh man braid photo booth four dollar toast lumbersexual bicycle rights.",
"Drinking vinegar taxidermy try-hard, you probably haven't heard of them literally aesthetic XOXO street art humblebrag heirloom biodiesel ugh. Chia hashtag mixtape, celiac humblebrag brooklyn pinterest kogi godard. Put a bird on it twee post-ironic seitan freegan. Fingerstache sriracha irony bicycle rights affogato wolf. Literally quinoa tote bag ugh echo park. Shoreditch schlitz flannel VHS seitan, disrupt lomo sartorial celiac. Master cleanse fashion axe chicharrones lumbersexual single-origin coffee.",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"Fap tilde wayfarers, semiotics gastropub DIY quinoa vice pork belly hashtag pinterest sriracha heirloom ugh neutra. Chia swag leggings raw denim meditation. Mumblecore letterpress iPhone XOXO craft beer, PBR&B drinking vinegar pinterest 3 wolf moon. Ennui chartreuse mlkshk, hoodie scenester fap taxidermy craft beer mustache biodiesel cred fashion axe irony pabst. Artisan locavore XOXO street art, before they sold out cray distillery hammock bushwick iPhone chicharrones irony. Man bun umami retro man braid before they sold out. Paleo next level whatever, tousled slow-carb selvage fixie.",
"Biodiesel intelligentsia pitchfork, tattooed portland authentic yuccie leggings artisan bespoke literally mustache irony. Freegan authentic whatever, food truck craft beer bushwick cold-pressed irony roof party neutra yuccie listicle hashtag. Kinfolk keffiyeh kitsch brooklyn tacos etsy taxidermy, 3 wolf moon ennui street art celiac chicharrones tilde gastropub. Yr tote bag blog portland. Knausgaard cred gochujang cold-pressed, swag beard aesthetic paleo irony stumptown franzen PBR&B narwhal pop-up literally. Cliche affogato schlitz.",
"Sed a turpis eu lacus viverra mattis sed laoreet arcu. Nulla tempus dapibus diam at faucibus. Sed massa turpis, posuere sed sem ac, tristique semper mi. Nulla consequat lectus eget justo venenatis scelerisque. Maecenas a sapien ultrices, tempus purus et, rutrum ipsum. Suspendisse in ex bibendum, ornare velit eget, porta nunc. Sed nibh ipsum, pulvinar a mi nec, eleifend elementum ex. Integer mi urna, elementum nec dolor et, suscipit accumsan libero. Morbi efficitur erat at tellus porta, eget fermentum metus efficitur."

];
var randomNumber = Math.floor(Math.random() * myParagraphs.length);
var randomParagraph = myParagraphs[randomNumber];
var splitParagraph = randomParagraph.split(" ");
var currentWordEl = document.querySelector(".current-word");
var currentIndex = 0;
var gameTextTag = document.querySelector(".game-text");
gameTextTag.textContent = randomParagraph;
var movementSpeed = 900 / splitParagraph.length;
currentWordEl.textContent = splitParagraph[currentIndex];
document.querySelector(".text-input").onkeydown = function(eventObj){
	if(eventObj.which ===32){
		var userInput = document.querySelector(".text-input").value;

		eventObj.preventDefault();
		var currentPos = parseInt(document.querySelector(".moto-racr").style.left);
		if(currentPos >= 900 - 150){
			return;
			alert("you can't see me!")
		};
		document.querySelector(".moto-racr").style.left = currentPos + movementSpeed + "px";
		document.querySelector(".text-input").value = "";
		currentIndex++;
		currentWordEl.textContent = splitParagraph[currentIndex];


	}
}


















