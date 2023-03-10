export interface API_Params {
    page?: number;
}

export interface API_Response {
    info: Info;
    results: Result[];
}

export interface Info {
    count?: number;
    pages?: number;
    next?: string;
    prev?: null;
}

export interface Result {
    id?: number | null;
    name?: string;
    status?: Status;
    species?: Species;
    type?: string;
    gender?: Gender;
    origin?: Location;
    location?: Location;
    image?: string;
    episode?: string[];
    url?: string;
    created?: Date;
}

export type Gender = 'Male' | 'Female' | 'unknown';

export interface Location {
    name: string;
    url: string;
}

export type Species = 'Human' | 'Alien';

export type Status = 'Alive' | 'unknown' | 'Dead';
