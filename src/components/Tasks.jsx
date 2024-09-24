import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">New Task</h2>
      <NewTask onAddTask={onAddTask} />

      <div className="mt-4">
        {tasks.length === 0 && (
          <p className="text-stone-800 mb-4">
            This projects dose not have any task yet.
          </p>
        )}

        {tasks.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between my-4"
              >
                <span>{task.task}</span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tasks;
