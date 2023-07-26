export async function getAllStarships() {
    try {
        const response = await fetch('https://swapi.dev/api/starships/'
    )
        const data = await response.json();
        // console.log(data);
        return data.results;//results is the elements of the startships array
    } catch (event) {
        console.error(event)
    }
};




