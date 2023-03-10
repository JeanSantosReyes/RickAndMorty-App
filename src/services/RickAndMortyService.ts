import RickAndMortyAPI from "../api/RickAndMortyAPI"
import { API_Response, API_Params, Result } from '../interfaces/RickAndMortyInterface';

export const getAllCharacter = ({ ...params }: API_Params) => {
    return RickAndMortyAPI.get<API_Response>('/character', { params });
}

export const getCharacter = (id: string) => {
    return RickAndMortyAPI.get<Result>(`/character/${id}`);
}
