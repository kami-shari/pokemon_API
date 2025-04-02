export const getPokemonDetails = async (idOrName: number | string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName.toString().toLowerCase()}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      types: data.types,
      sprites: data.sprites,
      stats: data.stats,
      height: data.height,
      weight: data.weight,
      cries: data.cries,
      moves: data.moves,
      abilities: data.abilities,
    };
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};

export const getTypeById = async (id: number | string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/ytpe/${id}`);
  const json = response.json();
  return json;
};

export const getAllTypes = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/type`);
  const json = response.json();
  return json;
};


