import { useLoaderData, useParams } from "react-router-dom"

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const parseId = parseInt(id)
    const job = jobs.find(job => job.id === parseId)
    
const {job_description,job_responsibility,educational_requirements, experiences,job_title,salary,contact_information} = job;


  return (
    <>
    <div className="p-8 mx-auto flex flex-wrap justify-center gap-2 lg:my-12">

    <div className="md:w-[60%] lg:p-10 text-justify px-2">
<p><strong>Job Description:</strong>{job_description}</p>
<p><strong>Job Responsibility:</strong>{job_responsibility}</p>
<br />
<h2 className="my-2 text-zinc-900 text-base font-extrabold leading-loose">Educational Requirement:</h2>

<p className="text-neutral-500 text-base font-semibold leading-loose">{educational_requirements}</p>
<h2 className="my-2 text-zinc-900 text-base font-extrabold leading-loose">Experiences:</h2>

<p className="text-neutral-500 text-base font-semibold leading-loose">{experiences}</p>
    </div>
<div>
<div className="w-96 h-96 bg-indigo-100 rounded-lg p-4">
<p className="text-zinc-900 text-xl font-extrabold">Job Details</p>
<hr className="border-zinc-400 my-2" />
<p className="mt-4"> <strong>Salary:</strong>  {salary}</p>
<p><strong> Job Title:</strong>  {job_title}</p>

<p className="text-zinc-900 text-xl font-extrabold my-4">Contact Information</p>

<hr className="border-zinc-400 my-2" />
<p className="mt-4"><strong> Phone:</strong>  {contact_information.phone}</p>
<p><strong> Email:</strong>  {contact_information.email}</p>
<p><strong> Address: </strong> {contact_information.address}</p>
<hr className="border-zinc-400 mt-4" />
</div>
<div className="text-center">
<button className="px-32 py-4 mt-2 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg justify-start items-start gap-2.5 inline-flex text-white text-xl font-extrabold">APPLY NOW</button>
</div>
</div>




    </div>
    
    </>
  )
}

export default JobDetails
