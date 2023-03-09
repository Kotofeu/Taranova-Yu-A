import { $conection ,$conectionTest} from ".";

export const fetchPosts = async () => {
    const { data } = await $conection.get('',{
        params: {
            owner_id: 236298625,
            count:2,
            access_token: "",
            v:5.122

        }
    });
    return data;
}


export const fetchTest = async () => {
    const { data } = await $conectionTest.get('',{
        params: {
            count:1,

        }
    });
    return data;
}