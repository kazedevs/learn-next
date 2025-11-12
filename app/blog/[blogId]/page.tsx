import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "View blog post details",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  const data = res.data;

  return (
    <div className="flex justify-center py-4">
      Blog page {blogId}
      <br />
      title - {data.title}
      <br />
      body - {data.body}
    </div>
  );
}