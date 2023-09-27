import Banner from './Banner/Banner'
import JobCategory from './JobCategoryList/JobCategory'
import FeaturedJob from './FeaturedJob/FeaturedJob'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
      <>
          <main>
      <Helmet>
        <title>Career Hub | Home</title>
      </Helmet>
      <Banner />
      <JobCategory />
      <FeaturedJob />
    </main>
    </>
  )
}

export default Home
