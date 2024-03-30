'use client'

import {useEffect, useState} from "react";
import {Tag} from "@/app/blog/_model/blog";
import {getTags} from "@/lib/api/blog";
import {UseFormRegisterReturn} from "react-hook-form";
import TagItem from "@/app/blog/_component/TagItem";

export default function TagInputField(props: UseFormRegisterReturn) {
    const [tags, setTags] = useState<Tag[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    useEffect(() => {
        requestTags();
    }, []);

    const requestTags = async () => {
        const {data} = await getTags();
        setTags(data.data);
    }


    return <div className={'flex mt-14 items-center'}>
        <div>
            <ul>
                {selectedTags.map((it) =>
                    <TagItem key={it.id} label={it.tagLabel}/>)}
            </ul>
        </div>
        <ul>
            {tags.map(({id, tagLabel}) =>
                <li key={id} value={id}>{tagLabel}</li>)}
        </ul>
    </div>
}