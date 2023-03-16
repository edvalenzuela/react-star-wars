export function Character({ character }) {
	return (
		<div className="col card text-warning bg-dark mb-3 card-body text-left p-5">
			<h5 className="card-title"> Name: {character.name}</h5>
			<p className="card-text"> Height: {character.height}</p>
			<p className="card-text"> Mass: {character.mass}</p>
			<p className="card-text"> Hair_color: {character.hair_color}</p>
			<p className="card-text"> Skin_color: {character.skin_color}</p>
			<p className="card-text"> Eye_color: {character.eye_color}</p>
			<p className="card-text"> Gender: {character.gender}</p>
		</div>
	);
}
