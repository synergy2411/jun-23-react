import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import HomePage from "./pages/Home";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import Todos, { fetchTodos as todosLoader } from "./pages/Todos/Todos";

const router = createBrowserRouter([
  {
    path: "",
    errorElement: <ErrorPage />,
  },
  {
    path: "/root",
    element: <Root />,
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
        loader: todosLoader,
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
