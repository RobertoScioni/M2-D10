/*$(".carousel-item", ".show-neighbors")
	.each(function () {
		var next = $(this).next()
		if (!next.length) {
			next = $(this).siblings(":first")
		}
		next.children(":first-child").clone().appendTo($(this))
	})
	.each(function () {
		var prev = $(this).prev()
		if (!prev.length) {
			prev = $(this).siblings(":last")
		}
		prev.children(":nth-last-child(2)").clone().prependTo($(this))
	})
*/
const switcharoo = (E) => {
	document.querySelectorAll(".sales>.card-deck").forEach((card) => {
		card.classList.add("d-none")
	})
	const classe = E.target.classList[0]
	document.querySelector("." + classe + "Tg").classList.toggle("d-none")
}
