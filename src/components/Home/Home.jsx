import Banner from './Banner/Banner'
import JobCategory from './JobCategoryList/JobCategory'
import FeaturedJob from './FeaturedJob/FeaturedJob'

const Home = () => {
  return (
    <main>
      <Banner />
      <JobCategory />
      <FeaturedJob />
    </main>
  )
}

export default Home
