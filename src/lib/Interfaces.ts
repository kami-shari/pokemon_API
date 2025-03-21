export interface Pokemon {
  abilities: Ability[];
  cries: {
    latest: string;
  };
  height: number;
  id: number;
  location_area_encounters: string;
  moves: Mfe[];
  name: string;
  order: number;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Other {
  home: Home;
  showdown: Sprites;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  animated?: Sprites;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface Mfe {
  move: Move;
}
export interface Move {
  name: string;
  url: string;
}
