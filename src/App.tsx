import React, { Fragment, useState } from "react";
import "./App.css";

type FormElem = React.FormEvent<HTMLFormElement>;

//ITodo[]  = demand: [{ text: "value", complete: true }, { text: "value", complete: false }];
interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>{value}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  );
};

export default App;
