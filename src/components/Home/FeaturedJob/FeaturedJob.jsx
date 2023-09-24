import { useEffect, useState } from "react"
import JobFeature from "./JobFeature";

const FeaturedJob = () => {

const [jobs, setJobs] = useState([])
const [dataLength, setDataLength] = useState(4)

useEffect(() => {
  fetch('jobs.json')
  .then(res => res.json())
  .then (data => setJobs(data))
}, []); 


  return (
    <>
    <div className="my-16">
      <h2 className="text-center text-zinc-900 text-5xl font-extrabold">Featured Jobs</h2>
      <p className="text-center text-neutral-500 leading-relaxed my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
    </div>
    <div>
      <div className="flex justify-center">
      <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
    {jobs.slice(0, dataLength).map(job=> <JobFeature key={job.id} jobs={job} />)}
    </div>
    </div>
    <div className={dataLength!==jobs.length ? "text-center" : 'hidden'}>
    <button onClick={()=> setDataLength(jobs.length)} className="px-4 py-2 my-8 bg-gradient-to-r from-indigo-400 to-violet-500 rounded text-center gap-2.5 text-white text-lg font-extrabold">Show All
    </button>
    </div>
        </div>
    </>
  )
}

export default FeaturedJob
