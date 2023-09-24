import React, { useEffect, useState } from 'react'
import Categories from './Categories';

const JobCategory = () => {
const [category, setCategory] = useState([])


useEffect(() => {
  fetch('categories.json')
  .then(res => res.json())
  .then (data => setCategory(data))
}, []); 


  return (<>
    <div className='my-16'>
      <h2 className='text-5xl text-center font-extrabold'>Job Category List</h2>
    <p className='text-center my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
    </div>
<div className='flex justify-center h-[36vh] items-center'>
<div className='flex gap-4 flex-wrap justify-center'>
{category.map(category=><Categories category={category} />)}
</div>
</div>


    </>
  )
}

export default JobCategory
