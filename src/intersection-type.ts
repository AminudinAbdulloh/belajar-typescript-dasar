export interface HasName {
    name: string;
}

export interface HasId {
    id: string;
}

export type Domain = HasId & HasName;