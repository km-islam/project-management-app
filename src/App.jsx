import CreateProject from "./components/CreateProject";

import { useState } from "react";
import EmptyProject from "./components/EmptyProject";
import SelectedProject from "./components/SelectedProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (task) => {
    setProjectState((prevState) => {
      console.log(prevState);
      const newTask = {
        task: task,
        projectId: prevState.selectedProjectId,
        id: crypto.randomUUID(),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };
  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleCreateProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handelClickCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const projectId = crypto.randomUUID();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleSelectedProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
      
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <CreateProject
        onAdd={handleAddProject}
        onHandleCancel={handelClickCancel}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <EmptyProject onHandleCreateProject={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onHandleCreateProject={handleCreateProject}
        onSelectProject={handleSelectedProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />

      {content}
    </main>
  );
}

export default App;
