import axios from 'axios'
import {EventStore} from './EventStore'
import {BlogsStore} from './BlogsStore'
import {ApplicationStore} from './ApplicationStore'
import { AppealStore } from './AppealStore';
export interface IBaseInerface {
    [key: string]: unknown;
}

export const $host = axios.create({
    baseURL: process.env.REACT_APP_GET_URL,
    auth: {
        username: `${process.env.REACT_APP_USER_NAME}`,
        password: `${process.env.REACT_APP_USER_PASSWORD}`
    }
})


export const blogStore = new BlogsStore()
export const eventStore = new EventStore()
export const applicationStore = new ApplicationStore()
export const appealStore = new AppealStore()
