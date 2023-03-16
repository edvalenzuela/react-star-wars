import { useFetch } from "../hooks/useFetch";
import { Character } from "./Character";


export function CharacterList() {	
	const { characters, isLoading } = useFetch(`https://swapi.dev/api/people/`);

	return (
		<div className="container">
			<div className="row">
				{
					isLoading && characters.length > 1 ?
						characters.map((character, index) => (
								<div className="col-md-4" key={character.name || index}>
									<Character character={character} />
								</div>
							)
						)
					: (<p>Loading...</p>)
				}
			</div>
		</div>
	);
}
