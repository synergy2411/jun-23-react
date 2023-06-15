import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import HomePage from "./pages/Home";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import Todos, { loader as todoLoader } from "./pages/Todos/Todos";
import TodoEdit from "./pages/Todos/TodoEdit";
import TodoItem, {
  loader as todoItemLoader,
  action as todoItemAction,
} from "./pages/Todos/TodoItem";
import AddNewTodo, {
  action as AddNewTodoAction,
} from "./pages/Todos/AddNewTodo";
import Counter from "./pages/Counter/Counter";
import Posts from "./pages/Posts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products", // http://localhost:3000/products
        element: <h2>Products loaded</h2>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "todos",
        element: <Todos />,
        loader: todoLoader,
      },
      {
        path: "todos/new",
        element: <AddNewTodo />,
        action: AddNewTodoAction,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "todos/:todoId",
        element: <TodoItem />,
        loader: todoItemLoader,
        action: todoItemAction,
      },
      {
        path: "counter",
        element: <Counter />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

// function App() {
// let [username, setUsername] = useState("John Doe");
// let [toggle, setToggle] = useState(false);

// let [isLoggedIn, setIsLoggedIn] = useState(false);

// return (
//   <div className="container">
//     <h1>App coming soon...</h1>

//     <Parent />

{
  /* <UseReducerDemo /> */
}

{
  /* <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <ThemeContext.Provider value={{ favTheme: "dark", fontSize: 28 }}>
          <Login />
          <UseEffectDemo />
        </ThemeContext.Provider>
      </AuthContext.Provider> */
}

{
  /* <FormikDemo /> */
}
//     </div>
//   );
// }

// export default App;

{
  /* <ErrorBoundary>
<CounterError />
</ErrorBoundary>

<ErrorBoundary>
<Expenses />
</ErrorBoundary> */
}

{
  /* <button onClick={() => setUsername("Chnaged Name")}>
Change Username
</button>

<button className="btn btn-secondary" onClick={() => setToggle(!toggle)}>
Toggle
</button>

{toggle && <ClassBasedComp username={username} />} */
}
