

const BlogDetails = async ({params}) => {
const {blogId} = await params
console.log(blogId)

const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
const data = await res.json()
console.log(data)
return(
<>
<div className="max-w-7xl mx-auto flex flex-col justify-center items-center min-h-screen">
<div className="flex flex-col justify-center items-center rounded-xl w-96 bg-blue-500 p-10 text-wrap">
<h1 className="text-2xl my-3 text-black">{data?.title}</h1>
<h1 className="text-sm">{data?.body}</h1>
</div>
</div>
</>
)
}

export default BlogDetails