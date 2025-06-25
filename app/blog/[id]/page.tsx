import { notFound } from "next/navigation";
import blogs from "@/data/blogs";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params before using
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return notFound();

  return (
    <section className="Blog-details2 text-[#008000] text-justify">
      <div className="container mx-auto max-w-[800px] px-4 lg:my-10">
        <div className="intro">
          <img
            className="rounded-2xl w-full max-h-[450px] lg:h-[450px] my-5 object-cover"
            src={blog.image}
            alt={blog.title}
          />
          <h4 className="text-[18px] text-[#008000] mb-5 font-bold">
            {blog.title}
          </h4>
          <p>
            <i>
              By: {blog.author}
              <br />
              Published on: {blog.date}
            </i>
          </p>
          <h5 className="text-[30px] font-semibold my-5">Introduction</h5>
          <p className="text-justify">{blog.intro}</p>
        </div>
        <div
          className="full-content mt-8"
          dangerouslySetInnerHTML={{ __html: blog.fullContent }}
        />
      </div>
    </section>
  );
}
