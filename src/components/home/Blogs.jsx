import React from "react";
import *as Images from '../../assets/photos';
import{BlogsCard} from '../shared';
const blogsArray =[
    {
        id: 1,
        image: Images.Rectangle1,
        title: "Going all-in with millennial design",
        path: "/",
        createdAt: 1685102912
      },
      {
        id: 2,
        image: Images.Rectangle2,
        title: "Going all-in with millennial design",
        path: "/",
        createdAt: 1685102912
      },
      {
        id: 3,
        image: Images.Rectangle3,
        title: "Going all-in with millennial design",
        path: "/",
        createdAt: 1685102912
      }
    ];
    const Blogs = () => {
        return (
          <>
            <div>
              <h3 class="text-2xl font-bold text-center mt-16">
                Our Blogs
              </h3>
              <p class="text-center mt-6 text-fourth"><small>Find a bright ideal to suit your taste with our great selection</small></p>
              <div className="mt-16 grid grid-cols-3 gap-8">
                {blogsArray.map((blog) => {
                  return (
                    <BlogsCard
                      key={blog.id}
                      src={blog.image}
                      title={blog.title}
                      path={blog.path}
                      createdAt={blog.createdAt}
                    />
                    
                  );
                })}
              
              </div>
              <div className='text-center mb-16'>
            <button className=" border-b-2 ">View All Post</button>
            </div>
            </div>
          </>
        );
      };
      
      export default Blogs;

