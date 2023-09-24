
const JobFeature = ({jobs}) => {
const {logo,job_title,remote_or_onsite,location,salary} = jobs;
  return (
    <div className="max-w-96 max-h-96 p-4 bg-white shadow-sm m-6">
     <img className="w-36 h-22" src={logo} alt="" />
     <h3 class="text-zinc-700 text-xl font-extrabold my-1">{job_title}</h3>
     <div class="w-24 h-10 px-5 py-2 rounded border border-indigo-400 justify-start text-indigo-400">{remote_or_onsite}</div>
     <div className="flex flex-col my-2 gap-2">
        <p>Location:{location}</p>
        <p>Salary:{salary}</p>
     </div>
     <button className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded justify-start items-start gap-2.5 text-white text-lg font-extrabold">View Details
    </button>
</div>
  )
}

export default JobFeature
