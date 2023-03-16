import { useEffect, useState } from "react";

export const useFetch = (url = '') => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async() =>{
      setIsLoading(false)
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data.results);
        setIsLoading(true)
      } catch (error) {
        console.log({error})
      }
		}
    fetchData();
	}, []);

  return {
    characters,
    isLoading
  }
}