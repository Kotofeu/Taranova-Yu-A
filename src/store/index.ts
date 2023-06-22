import {EventStore} from './EventStore'
import {BlogsStore} from './BlogsStore'
import {ApplicationStore} from './ApplicationStore'

export const blogStore = new BlogsStore()
export const eventStore = new EventStore()
export const applicationStore = new ApplicationStore()
