

const Categories = ({category}) => {
    const {category_name,availability} = category;
  return (
<div class="flex flex-col gap-3 p-8 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg">
<img src='' alt={category_name} />
<h3 className="text-zinc-700 text-xl font-extrabold">{category_name}</h3>
<p className="text-neutral-400 text-base font-medium">{availability}</p>

</div>
  )
}

export default Categories
