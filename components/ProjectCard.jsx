import React from 'react';

const ProjectCard = ({name, photo, des}) => {
    return <div
        className="project cursor-pointer hover:shadow-md shadow-sky-300 transition-all bg-white/20 backdrop-blur-sm hover:border-slate-400/70 rounded-lg overflow-hidden border border-slate-300"
    >
        <div className="content p-3">
            <div className="py-1 pb-2 border-b border-slate-300">
                <h1 className="text-lg font-medium">- {name} -</h1>
            </div>
            <div className="mt-4">
                <img className="rounded border" src={photo} alt=""/>
                <div className="mt-2">
                  <span className="text-sm border-b border-dashed border-slate-400 text-orange-800">
                    Short Description:
                  </span>
                    <p className="text-sm text-slate-900 mt-1">
                        {" " + des}
                    </p>
                    <p className="my-4 text-sm">
                        <span className=" text-blue-500">Status: </span>{" "}
                        <span>Featured</span>
                    {/*    <span className="ml-4 bg-black text-xs text-white p-2 px-3 rounded">*/}
                    {/*  Github repo*/}
                    {/*</span>*/}
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectCard;