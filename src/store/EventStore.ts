import { makeAutoObservable } from 'mobx';
import { $host, IBaseInerface } from '.';

export interface EventsJSON extends IBaseInerface {
    events: Event[];
    serverTime: Date;
}

export interface Event extends IBaseInerface  {
    uid: string;
    type: Type;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
}

export interface Type extends IBaseInerface  {
    uid: string;
    name: string;
}


export class EventStore {
    private _events: EventsJSON | null = null;
    private _isLoading: boolean = false
    private _error: string | null = null
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    get events() {
        return this._events
    }
    get isLoading() {
        return this._isLoading
    }
    get error() {
        return this._error
    }
    setIsLoading(loading: boolean) {
        this._isLoading = loading
    }
    setError(errorString: string) {
        this._error = errorString
    }
    setEvents(events: EventsJSON) {
        this._events = events
    }
    loadEvents = async () => {
        this.setIsLoading(true)
        await $host.get('/getEvents')
            .then((data) => this.setEvents(data.data))
            .catch(error => this.setError(error))
            .finally(() => this.setIsLoading(false))
    }
}
