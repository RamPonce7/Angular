export interface IPelicula {
  hero_id?: string;
  vote_count?: number;
  id?: number;
  video?: boolean;
  vote_average?: number;
  title?: string;
  popularity?: number;
  poster_path?: string;
  originalLanguage?: string;
  originalTitle?: string;
  genre_ids?: number[];
  backdrop_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
}
