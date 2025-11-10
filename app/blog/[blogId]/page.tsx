import axios from "axios";

import { Metadata } from 'next';

type Props = {
  params: { blogId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function BlogPage({ params }: Props) {
    const postId = params.blogId;
    
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    const data = res.data;

    return <div className="flex justify-center py-4">
        Blog page {postId}

        <br />
        title - {data.title}
        <br />
        body - {data.body}
    </div>
}