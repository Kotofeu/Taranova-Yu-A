import axios, { AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';

export interface EventsJSON {
    events: Event[];
    serverTime: Date;
}

export interface Event {
    uid: string;
    type: Type;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
}

export interface Type {
    uid: string;
    name: string;
}

const fetchEvent = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_EVENTS_GET_URL}`, { 
        auth: { 
            username: `${process.env.REACT_APP_USER_NAME}`, 
            password: `${process.env.REACT_APP_USER_PASSWORD}` 
        } 
    });
    return data
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
    setBlogs(events: EventsJSON) {
        this._events = events
    }
    loadEvents = async () => {
        this.setIsLoading(true)
        fetchEvent()
            .then((data) => console.log(data))
            .catch(error => this.setError(error))
            .finally(() => this.setIsLoading(false))
    }
}
