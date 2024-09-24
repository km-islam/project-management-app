const EmptyProject = ({ onHandleCreateProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-empty-box-icon-for-your-project-png-image_4845138.jpg"
        alt=""
        className="w-[200px] h-[200px] object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <div className="mt-8">
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={onHandleCreateProject}
        >
          Create new project
        </button>
      </div>
    </div>
  );
};

export default EmptyProject;
