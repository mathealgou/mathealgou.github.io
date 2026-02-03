function getRandomImage() {
	const MIN_NUMBER = 0;
	const MAX_NUMBER = 10;
	const randomNumber =
		Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

	const imageURL = `/img/quemfezfez/${randomNumber}.webp`;
	return imageURL;
}

function generateQuemFezFezImage() {
	const time = new Date().toLocaleTimeString("pt-BR", {
		weekday: "long",
		hour: "2-digit",
		minute: "2-digit",
	});
	const imageURL = getRandomImage();

	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");

	const image = new Image();
	image.src = imageURL;
	image.onload = () => {
		canvas.width = image.width;
		canvas.height = image.height;

		// Draw the image on the canvas
		context.drawImage(image, 0, 0);

		// Draw text over the image
		drawTextOverImage(context, time, canvas);
	};
}

function drawTextOverImage(context, time, canvas) {
	// Write "Quem Fez Fez" text and time
	const fontSize = canvas.width / 8;
	context.font = `${fontSize}px Arial`;
	context.fillStyle = "white";
	context.fillText("Quem fez, fez.", 50, fontSize + 20);
	context.font = `${fontSize / 2}px Arial`;
	context.fillText(time, 50, fontSize + 20 + fontSize / 1.5);

	// download the image
	const downloadLink = document.createElement("a");
	downloadLink.href = canvas.toDataURL("image/webp");
	downloadLink.download = "quemfezfez.webp";
	downloadLink.click();
}
