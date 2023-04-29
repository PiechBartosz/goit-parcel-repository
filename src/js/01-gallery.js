import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
galleryItems.forEach((item) => {
	const li = document.createElement("li");
	const link = document.createElement("a");
	const img = document.createElement("img");

	li.classList.add("gallery__item");
	link.classList.add("gallery__link");
	img.classList.add("gallery__image");

	link.href = item.original;
	img.src = item.preview;
	img.alt = item.description;
	img.setAttribute("data-source", item.original);

	link.appendChild(img);
	li.appendChild(link);
	gallery.appendChild(li);
});

// Open modal on click
gallery.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.classList.contains("gallery__image")) {
		const modal = basicLightbox.create(
			`<img src="${e.target.dataset.source}" alt="${e.target.alt}" />`,
			{
				onClose: (instance) => {
					window.removeEventListener("keydown", onKeyDown);
				},
			}
		);

		const onKeyDown = (e) => {
			if (e.code === "Escape") {
				modal.close();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		modal.show();
	}
});
