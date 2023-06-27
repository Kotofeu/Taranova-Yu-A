import { makeAutoObservable } from 'mobx';
import { $host, IBaseInerface } from '.';
import { AxiosError } from 'axios';

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
    private _selectedEvent: Event | null = null
    private _isLoading: boolean = true
    private _error: AxiosError | null = null
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
    get selectedEvent() {
        return this._selectedEvent
    }
    private setIsLoading(loading: boolean) {
        this._isLoading = loading
    }
    private setError(errorString: AxiosError) {
        this._error = errorString
    }
    private setEvents(events: EventsJSON) {
        this._events = events
    }
    private setSelectedEvent(event: Event | null) {
        this._selectedEvent = event
    }
    findSelectedEvent(uid: string) {
        this.setSelectedEvent(this.events?.events.find(event => event.uid === uid) || null);
    }
    loadEvents = async () => {
        this.setIsLoading(true)
        await $host.get('/getEvents')
            .then((data) => this.setEvents(data.data))
            .catch(error => this.setError(error))
            .finally(() => this.setIsLoading(false))
    }
}
