import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const Taskdata = (e) => {
    setInputTask(e.target.value);
  };

  const addTask = () => {
    if (inputTask.trim() === "") return;
    setTask((prev) => [...prev, inputTask]);
    setInputTask("");
  };

  const deleteTask = (index) => {
    setTask((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          📝 Todo App
        </h2>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your task..."
            value={inputTask}
            onChange={Taskdata}
            className="flex-1 px-4 py-2 rounded-xl bg-black/40 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addTask}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <h3 className="text-xl font-semibold mb-3">
          All Tasks
        </h3>

        {task.length === 0 ? (
          <p className="text-gray-400 text-center">
            No tasks yet 🚀
          </p>
        ) : (
          <ul className="space-y-3">
            {task.map((value, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-black/40 px-4 py-2 rounded-xl hover:bg-black/60 transition"
              >
                <span className="break-words">{value}</span>

                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-400 hover:text-red-600 text-lg"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
