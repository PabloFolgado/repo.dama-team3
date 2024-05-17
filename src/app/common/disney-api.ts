export interface DisneyApi {
    info: Info;
    data: Datum[];
  }
  
  export interface Datum {
    _id: number;
    films: string[];
    shortFilms: any[];
    tvShows: string[];
    videoGames: string[];
    parkAttractions: string[];
    allies: any[];
    enemies: any[];
    sourceUrl: string;
    name: string;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
    url: string;
    __v: number;
  }
  
  export interface Info {
    count: number;
    totalPages: number;
    previousPage?: any;
    nextPage: string;
  }
