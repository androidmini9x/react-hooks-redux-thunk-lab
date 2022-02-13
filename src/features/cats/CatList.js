// write your CatList component here
function CatList({catPics}) {
	return (
		<div>
			{catPics.map(catPic => {
				return <img key={catPic.id} src={catPic.url} alt="cat" />
			})}
		</div>
	);
}

export default CatList;