export class Result<T> {
    constructor(errorCode: number, errorMessage: string, data: T) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.data = data;
        this.isSuccessful = this.errorCode === ErrorCodes.Success;
    }

    errorCode: number;
    errorMessage: string;
    isSuccessful: boolean;
    data: T;
}

export const ErrorCodes = {
    Success: 0,
    Failed: 1,
};

export const ErrorMessages = {
    Empty: '',
};
