export async function useTaskList({ task }) {
  let taskList;
  localStorage.getItem("tasklist")
    ? (taskList = JSON.parse(localStorage.getItem("tasklist")))
    : (taskList = []);

  taskList.push({ task: task, checked: false });

  localStorage.setItem("tasklist", JSON.stringify(taskList));
  taskList = JSON.parse(localStorage.getItem("tasklist"));

  return taskList;
}
