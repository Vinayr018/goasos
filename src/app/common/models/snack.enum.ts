export const enum SnackBarEnum {
    SUCCESS = 'Success',
    ERROR = 'Error'
}

export interface SnakBarInput {
    type: SnackBarEnum,
    message: string;
}