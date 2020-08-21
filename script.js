const portofolioItems = document.querySelectorAll('.portofolio-item-wrapper');
portofolioItems.forEach((portofolioItem) => {
	portofolioItem.addEventListener('mouseover', () => {
		portofolioItem.childNodes[1].classList.add('img-darken');
	});
	portofolioItem.addEventListener('mouseout', () => {
		portofolioItem.childNodes[1].classList.remove('img-darken');
	});
});
