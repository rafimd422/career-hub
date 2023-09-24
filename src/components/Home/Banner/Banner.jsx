import user from './images/user.png'


const Banner = () => {

  return (
<>
<section className="xl:h-[60vh] h-fit xl:justify-around justify-center flex md:gap-2 flex-wrap gap-6 bg-banner">
<div className="flex flex-col gap-2 self-center md:p-0 p-4">
<h2 className="text-zinc-900 text-6xl font-extrabold ">One Step <br />Closer To Your <br /> <span className="text-indigo-400 leading-10">Dream Job</span></h2>
<p class=" text-neutral-500 text-lg">Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>

<button className="bg-indigo-400 px-5 py-4 rounded-md text-white font-bold active:bg-slate-500">Get Started</button>
</div>


<div className='self-end'>
<img className='max-w-[560px]' src={user} alt="banner" />
</div>



</section>
</>
  )
};

export default Banner;
