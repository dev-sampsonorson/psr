/* export interface IProblemDetails {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    errors: any[];
} */

export class ProblemDetails {
    type: string = '';
    title: string = '';
    status: number = -1;
    detail: string = '';
    instance: string = '';
    errors: any[] = [];
}