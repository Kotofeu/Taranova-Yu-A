import { makeAutoObservable } from 'mobx';
import { $host, IBaseInerface } from '.';
import { AxiosError } from 'axios';

export interface AppealJSON extends IBaseInerface {
    code: number;
    serverTime: Date;
}
export class AppealStore {
    private _code: AppealJSON | null = null;
    private _isEnable: boolean = true;
    private _isLoading: boolean = false
    private _error: AxiosError | null = null
    private _lastAppealCreate: string = 'lastActionDate'
    private _delay: number = process.env.REACT_APP_APPEAL_DELAY ? +process.env.REACT_APP_APPEAL_DELAY : 2 * 60 * 1000
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    get isLoading() {
        return this._isLoading
    }
    get error() {
        return this._error
    }
    get code() {
        return this._code?.code
    }
    get isEnable() {
        return this._isEnable
    }
    get lastAppealCreate() {
        return this._lastAppealCreate
    }
    get delay() {
        return this._delay
    }
    private setIsLoading(loading: boolean) {
        this._isLoading = loading
    }
    private setError(errorString: AxiosError | null) {
        this._error = errorString
    }
    private setCode(code: AppealJSON) {
        this._code = code
    }
    setIsEnable(isEnable: boolean) {
        this._isEnable = isEnable
    }
    loadCode = async (formData: FormData) => {
        this.setIsLoading(true)
        await $host.post('/addAppeal', formData)
            .then((data) => {
                this.setCode(data.data)
                this.setIsEnable(false);
                const currentTimestamp = new Date().getTime();
                localStorage.setItem(this.lastAppealCreate, (currentTimestamp + this.delay).toString());
                this.setError(null)
            })
            .catch((error: AxiosError) => this.setError(error))
            .finally(() => this.setIsLoading(false))
    }
}
