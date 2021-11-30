export interface IApiResponse {
    result: any;
    succeeded: boolean;
    message: string;
    errors: any[];
}
export interface ILookupItem {
    id: number;
    value: string;
}
