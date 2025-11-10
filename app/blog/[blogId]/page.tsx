import axios from "axios";

interface BlogPageProps {
  params: {
    blogId: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
    const postId = (await params).blogId;

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