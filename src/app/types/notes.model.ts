export interface Note{
    id: number;
    title?: string;
    content: string;
    date?: Date;
    color?: string;
    pinned?: boolean;
    archived?: boolean;
    deleted?: boolean;
    
}