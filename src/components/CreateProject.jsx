import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const CreateProject = ({ onAdd, onHandleCancel }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDateRef = dueDateRef.current.value;

    // Validations
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDateRef.trim() === ""
    ) {
      console.log("form is invalid");
      modal.current.open();
      return;
    }

    // Save Data
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDateRef,
    });
  };

  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onHandleCancel}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </menu>

        <div>
          <Input type="text" label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input type="date" label="Due date" ref={dueDateRef} />
        </div>
      </div>

      <Modal ref={modal} buttonLabel="Cancel">
        <div>
          <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
            Invalid Input
          </h2>
          <p className="text-stone-500 mb-4">
            Oops... looks like you forgot to enter a value.
          </p>
          <p className="text-stone-500 mb-4">
            Please make sure you provide a valid value for every input field.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default CreateProject;
