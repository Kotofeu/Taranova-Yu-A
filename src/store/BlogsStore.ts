import { makeAutoObservable } from 'mobx';
import { $host, IBaseInerface } from '.';
import { AxiosError } from 'axios';

export interface IBlog extends IBaseInerface {
    publications: Blog[];
    serverTime: any;
}

export interface Blog extends IBaseInerface {
    comments: Comments;
    hash: string;
    attachments: Attachment[];
    date: number;
    id: number;
    likes: Likes;
    owner_id: number;
    reposts: Reposts;
    text: string;
    views: Views;
}
interface Likes extends IBaseInerface {
    count: number;
}
interface Views extends IBaseInerface {
    count: number;
}
interface Attachment extends IBaseInerface {
    type: string;
    photo?: Photo;
    video?: Video;
    link?: any;
}

interface Photo extends IBaseInerface {
    date: number;
    id: number;
    owner_id: number;
    access_key: string;
    sizes: Size[];
    text: string;
}
interface Size extends IBaseInerface {
    height: number;
    type?: string;
    width: number;
    url: string;
}
interface Video extends IBaseInerface {
    access_key: string;
    comments: number;
    date: number;
    description: string;
    duration: number;
    image: Size[];
    first_frame: Size[];
    width: number;
    height: number;
    id: number;
    owner_id: number;
    title: string;
    views: number;
}
interface Comments extends IBaseInerface {
    count: number;
}

interface Reposts extends IBaseInerface {
    count: number;
}

export class BlogsStore {
    private _blogs: IBlog | null = null;
    private _selectedBlog: Blog | null = null
    private _ownerId: number = 236298625;
    private _isLoading: boolean = true
    private _error: AxiosError | null = null
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    get blogs() {
        return this._blogs
    }
    get ownerId() {
        return this._ownerId
    }
    get selectedBlog() {
        return this._selectedBlog
    }
    get isLoading() {
        return this._isLoading
    }
    get error() {
        return this._error
    }
    private setIsLoading(loading: boolean) {
        this._isLoading = loading
    }
    private setError(errorString: AxiosError) {
        this._error = errorString
    }
    private setBlogs(blogs: IBlog) {
        this._blogs = blogs
    }
    setSelectedBlog(id: number) {
        this._selectedBlog = this.blogs?.publications.find(blog => blog.id === id) || null
    }
    getItemImage(blog: Attachment, maxHeight: number = 1080) {
        const photoSrc = blog?.photo?.sizes.reduce((acc, photo) => {
            if (photo.height <= maxHeight && acc.height < photo.height) acc = photo
            return acc
        })?.url
        const videoSrc = blog?.video?.first_frame.reduce((acc, video) => {
            if (video.height <= maxHeight && acc.height < video.height) acc = video
            return acc
        })?.url
        const imageSrc = photoSrc || videoSrc
        return imageSrc
    }


    loadBloags = async () => {
        this.setIsLoading(true)
        await $host.get('/getPublicationsVK')
            .then((data) => this.setBlogs(data.data))
            .catch((error) => this.setError(error))
            .finally(() => this.setIsLoading(false))
    }
}