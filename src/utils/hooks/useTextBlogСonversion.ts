import { useEffect, useState } from 'react';
const RegExpTag: RegExp = /#([А-яА-ЯA-zA-Z0-9]+)/g
const RegExpMention: RegExp = /\[(.*?)\]/g
const RegExpMentionName: RegExp = /\|(.*?)\]/
export default function useTextBlogСonversion(text: string) {
    const [desc, setDesc] = useState<string[] | null>([]);
    const [tags, setTags] = useState<string[] | null>([]);
    useEffect(() => {
        const mention: string = text.match(RegExpMentionName)?.[1] || ''
        setDesc(text.replace(RegExpTag, '')
            .replace(RegExpMention, mention)
            .split('\n'))
        setTags(text.match(RegExpTag))
    }, [text])
    return [desc, tags];
}