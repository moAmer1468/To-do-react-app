import dummyPeople from "../../data";
import "../../style.css";
export const TodoItem = ({ deleteItem, todos }) => {
  console.log("This is coming From AddItem Comp");
  console.log(todos);
  const handleDeleteItem = (id) => {
    deleteItem(id);
  };
  return (
    <div className="list-items">
      {todos.length >= 1 ? (
        todos.map((ele, index, arr) => {
          return (
            <div key={ele.id}>
              <span className="name"> {ele.name}</span>
              <span className="age">{ele.age}</span>
              <span
                className="add"
                onClick={() => {
                  handleDeleteItem(ele.id);
                }}
              >
                {" "}
                &times;
              </span>
            </div>
          );
        }, this)
      ) : (
        <h3>There is no items here</h3>
      )}
    </div>
  );
};

//  dummyPeople.length >= 1 ? (
//     dummyPeople.map((ele, index, arr) => {
//       return (
//         <div key={ele.id}>
//           <h2>mohaemd alaa amer {ele.id}</h2>
//           <div>Potter {ele.name}</div>
//           <div>Waht is coming {ele.age}</div>
//         </div>
//       );
//     }, this)
//   )
