import { Button } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Career Hub | Blogs</title>
      </Helmet>
      This is Blog section
      <Button>Button</Button>    
      </div>
  )
}

export default Blog
