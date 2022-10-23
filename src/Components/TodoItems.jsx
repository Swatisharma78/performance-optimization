import React from "react";
const expensiveOperation = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    continue;
  }
  return true;
};
const TodoItems = ({ status, id, title, toggleStatus, deleteTask }) => {
  // this is going to take some time for executing
  const isItDone = expensiveOperation(200);
  console.log("Rendering TodoItems", id);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginRight: "20px" }}>{title}</div>
      <div>{status ? "True" : "false"}</div>
      <button onClick={() => toggleStatus(id)}>Toggle</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};
// const checkEquality=(prevProps, currentProps)=>{
//     return(
//         prevProps.id=== currentProps.id &&
//         prevProps.status ===
//         currentProps.status &&
//         prevProps.title === currentProps.title
//     );
// };

// export default React.memo(TodoItems, checkEquality)

export default React.memo(TodoItems);
