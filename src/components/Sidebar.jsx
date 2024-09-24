/* eslint-disable react/prop-types */
import React from "react";

const Sidebar = ({
  onHandleCreateProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={onHandleCreateProject}
        >
          + Add New
        </button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          let styleCss =
            "w-full text-left px-2 py-2 rounded-md my-1  hover:text-stone-100 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            styleCss += " bg-stone-800 text-stone-200";
          } else {
            styleCss += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={styleCss}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
