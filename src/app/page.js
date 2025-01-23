import Link from "next/link"

const HomePage = async() => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json()


  return (
<>
<h1 className="text-center text-purple-600 text-4xl py-14 bg-white">Vew Our Blog </h1>
<div className="overflow-x-auto">
  <table className="table text-black bg-gray-200">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="text-black">Title</th>
        <th className="text-black">View Details</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     {
  data?.map((dat , index) =>
  
    <tr key={dat?.id}>
    <th>{index + 1}</th>
    <td>  {dat?.title}</td>
    <td> <Link className="text-lime-500 font-semibold text-lg underline" href={`/blog/${dat?.id}`}>View Details</Link></td>
  </tr>)
}
    </tbody>
  </table>
</div>
<div className="grid md:grid-cols-3 px-2 md:px-5 lg:grid-cols-4 gap-5 max-w-7xl mx-auto py-20 bg-white">

 </div>

</>
  )
}

export default HomePage