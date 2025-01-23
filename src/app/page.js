import Link from "next/link"

const HomePage = async() => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json()


  return (
<>
<div className="grid md:grid-cols-3 px-2 md:px-5 lg:grid-cols-4 gap-5 max-w-7xl mx-auto py-20 bg-white">
{
  data?.map(dat => <div key={dat?.id} className="card bg-base-100 shadow-xl">
    
    <div className="card-body rounded-xl bg-purple-500">
      <h2 className="card-title">
       {dat?.title}
      </h2>
      <p>{dat?.body.slice(0,70)} <Link className="text-lime-500 font-semibold text-lg underline" href={`/blog/${dat?.id}`}>read more</Link></p>
     
    </div>
  </div>)
}
 </div>

</>
  )
}

export default HomePage