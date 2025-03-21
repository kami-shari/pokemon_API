export const getPokemonDetails = async (id: number | string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = response.json();
  return json;
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


