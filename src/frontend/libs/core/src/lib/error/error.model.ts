export class ProblemDetails {
    type: string = '';
    title: string = '';
    status: number = -1;
    detail: string = '';
    instance: string = '';
    errors: any[] = [];
}

export class ErrorCode {
    static readonly UNAUTHENTICATED: string = 'UNAUTHENTICATED';
    static readonly FORBIDDEN: string = 'FORBIDDEN';
    static readonly VALIDATION_FAILED: string = 'VALIDATION_FAILED';
    static readonly INTERNAL_SERVER_ERROR: string = 'INTERNAL_SERVER_ERROR';
    static readonly BAD_USER_INPUT: string = 'BAD_USER_INPUT';
}
