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
    attachments: ItemAttachment[];
    date: number;
    edited?: number;
    from_id: number;
    id: number;
    is_favorite: boolean;
    likes: Likes;
    owner_id: number;
    post_source: ItemPostSource;
    post_type: string;
    reposts: Reposts;
    text: string;
    views: Views;
    copy_history?: CopyHistory[];
    activity?: Activity;
}
export interface Activity {
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
interface ItemAttachment {
    type: string;
    photo?: Photo;
    video?: Video;
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
    type?: SizeType | string;
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
}
interface Comments {
    can_post: number;
    count: number;
    groups_can_post: boolean;
}
interface CopyHistory {
    type: string;
    attachments: CopyHistoryAttachment[];
    date: number;
    from_id: number;
    id: number;
    owner_id: number;
    post_source: CopyHistoryPostSource;
    post_type: string;
    text: string;
}
interface CopyHistoryAttachment {
    type: string;
    photo?: Photo;
    link?: Link;
}
interface Link {
    url: string;
    description: string;
    is_favorite: boolean;
    title: string;
    target: string;
}
interface CopyHistoryPostSource {
    type: string;
}

interface ItemPostSource {
    platform: string;
    type: string;
}
interface Reposts {
    count: number;
    user_reposted: number;
}
enum SizeType {
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

class BlogsStore {
    _blogs: IBlog = JSONstring;
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    get blogs() {
        return this._blogs
    }
    get count() {
        return this.blogs.count
    }
    getSomeBlogs(count: number) {
        return this.blogs?.items.slice(0, count)
    }
    loadBloags = () => {
        this._blogs = JSONstring
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