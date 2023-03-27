import { makeAutoObservable } from 'mobx';
import { JSONstring } from './JSONstring';

export interface IBlog {
    count: number;
    items: Item[];
    next_from: string;
}

export interface Item {
    comments: Comments;
    hash: string;
    type: string;
    attachments: Attachment[];
    date: number;
    edited?: number;
    from_id: number;
    id: number;
    is_favorite: boolean;
    likes: Likes;
    owner_id: number;
    post_source: PostSource;
    post_type: string;
    reposts: Reposts;
    text: string;
    views: Views;
    activity?: Activity;
    copy_history?: CopyHistory[];
}
interface Activity {
    comments: Comment[];
    type: string;
    discriminator: string;
}
interface Comment {
    id: number;
    from_id: number;
    date: number;
    text: string;
    post_id: number;
    owner_id: number;
    parents_stack: any[];
    likes: Likes;
    thread: Views;
}
interface Likes {
    can_like: number;
    count: number;
    user_likes: number;
    can_publish: number;
    repost_disabled?: boolean;
}
interface Views {
    count: number;
}
interface Attachment {
    type: string;
    photo?: Photo;
    video?: Video;
    audio?: string;
    link?: Link;
}
interface Link {
    url: string;
    description: string;
    is_favorite: boolean;
    title: string;
    target: string;
    photo?: any;
}
interface Photo {
    album_id: number;
    date: number;
    id: number;
    owner_id: number;
    access_key: string;
    lat?: number;
    long?: number;
    sizes: Size[];
    text: string;
    has_tags: boolean;
    post_id?: number;
    user_id?: number;
}
interface Size {
    height: number;
    type?: string;
    width: number;
    url: string;
    with_padding?: number;
}


interface Video {
    access_key: string;
    can_comment: number;
    can_like: number;
    can_repost: number;
    can_subscribe: number;
    can_add_to_faves: number;
    can_add: number;
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
    is_favorite: boolean;
    track_code: string;
    type: string;
    views: number;
    can_dislike: number;
    repeat?: number;
}
interface Comments {
    can_post: number;
    count: number;
    groups_can_post: boolean;
}
interface CopyHistory {
    type: string;
    attachments: Attachment[];
    date: number;
    from_id: number;
    id: number;
    owner_id: number;
    post_source: PostSource;
    post_type: string;
    text: string;
}
interface PostSource {
    type: string;
    platform?: string;
}
interface Reposts {
    count: number;
    user_reposted: number;
}

export enum SizeType {
    M = "m",
    O = "o",
    P = "p",
    Q = "q",
    R = "r",
    S = "s",
    W = "w",
    X = "x",
    Y = "y",
    Z = "z",
}

export enum AttachmentType {
    Link = "link",
    Photo = "photo",
    Video = "video",
}

class BlogsStore {
    _blogs: IBlog | null = null;
    _selectedBlog: Item | null = null
    _ownerId: number = 236298625;
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    get blogs() {
        return this._blogs
    }
    get count() {
        return this.blogs?.count
    }
    get ownerId() {
        return this._ownerId
    }
    get selectedBlog() {
        return this._selectedBlog
    }
    getSelectedBlog(id: number) {
        this._selectedBlog = this._blogs?.items.find(blog => blog.id === id) || null;
        return this.selectedBlog
    }
    /* getSomeBlogs(count: number) {
         if (this._blogs && this._blogs.items.length > 2) {
             this._blogs.items = this._blogs.items.slice(0, count)
         }
         else {
             setTimeout(() => {
                 this._blogs = {
                     count: JSONstring.count,
                     items: JSONstring.items.filter(item => this.getItemImage(item) !== undefined ).slice(0, count),
                     next_from: JSONstring.next_from
                 }
             }, 1)
         }
 
     }*/

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
    callbackFunc(result: string) {
        console.log(result);
    }
    loadBloags = () => {
        setTimeout(() => {
            if (this.blogs !== JSONstring) {

                this._blogs = {
                    count: JSONstring.count,
                    items: JSONstring.items.filter(item => this.getItemImage(item.attachments[0])),
                    next_from: JSONstring.next_from
                }
            }

        }, 1)
    }
    /*
    loadBloags = (url: string) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => (this.blogs = data))
    }
    */

}
export default new BlogsStore();