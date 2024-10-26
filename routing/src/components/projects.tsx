"use-client"
import Link from "next/link";
import "./app.css"
export default function Projects() {
    let id = 0;
    const Projects = [
      {
        title: "Blog: ShareBook",
        description:
          "A React based Platform where you can post and watch others post",
        id: id++,
        url: "https://blog-share-book.vercel.app/",
      },
      {
        title: "TODO Application",
        description:
          "A React-based task manager edit ,delete and completed Features",
        id: id++,
        url: "https://daily-todo-mu.vercel.app/",
      },
      {
        title: "Dynamic Resume Builder",
        description: "A Resume builder that build based on users instructions",
        id: id++,
        url: "https://cv-generator-flax.vercel.app/",
      },
      {
        title: "Portfolio Website",
        description:
          "A responsive portfolio website built with React.js and Tailwind CSS.",
        id: id++,
        url: "/",
      },
    ];
    return (
  <section>
  <div className="py-20 px-4 md:px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
    <div className="flex flex-wrap lg:flex-nowrap justify-evenly m-2 md:m-3">
        {Projects.map((project)=>(
    <div key={project.id} className="my-12 lg:my-0 relative w-full sm:w-1/3 lg:w-1/4 border rounded-lg  border-slate-900 m-1 h-2/4">
  <div className={`h-56 projectImg${project.id} overflow-hidden`}></div>
  <div className="absolute -bottom-12 left-1/3 mx-auto">
<Link href={`/project/${project.id}`}> <button className="text-gray-200 mr-2 text-lg rounded-xl bg-slate-900 p-1">See More</button></Link>
 <Link target="_blank" href={`${project.url}`}><button className="text-gray-200 text-lg rounded-xl bg-slate-900 p-1">Demo</button></Link>

  {/* <div className="text-2xl font-semibold ">{project.title}</div>
    <div className="text-lg">{project.description}</div>
    */}
    </div> 
  </div>
        ))}
    
    </div>
  </div>

  </section>

    //   <section
    //     id="projects"
    //     className="py-20 px-4 md:px-6 bg-white dark:bg-slate-900 transition-colors duration-300"
    //   >
    //     <h2
       
    //       className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400"
    //     >
    //       Projects
    //     </h2>{" "}
    //     <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    //       {Projects.map((project, index) => (
    //         <div
            
    //           key={index}
    //           className="overflow-hidden group animate-fade-in bg-slate-100  dark:bg-slate-800 transition-colors duration-300"
    //           style={{ animationDelay: `${index * 200}ms` }}
    //         >
             
    //           <div
    //             id="CardHeader"
    //             className=" flex p-4 rounded-t-lg  bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-700 dark:to-blue-800"
    //           >
    //             <div>
    //               <div id="CardTitle" className="text-white text-2xl font-medium">
    //                 {project.title}
    //               </div>
    //               <div id="CardDescription" className="text-teal-100">
    //                 {project.description}
    //               </div>
    //             </div>
    //             <div className=" w-2/12">
    //               <a href={project.url} target="_blank">
    //                 <button className="rounded-xl bg-transparent text-white p-1">
    //                   Demo
    //                 </button>
    //               </a>
    //             </div>
    //           </div>
    //           <div id="CardContent" className="p-0 h-72">
    //             <div className={`projectImg${project.id} `}>
                
    //             </div>
    //           </div>
    //           {/* </a> */}
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    );
  }
  
