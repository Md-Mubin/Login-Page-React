import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LightVersion    from "./component/LightVersion"
import DarkVersion     from "./component/DarkVersion"

function App() {

  const ARDOX = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/"               element={<DarkVersion />} />
        <Route path="/light_version"  element={<LightVersion/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={ARDOX} />
    </>
  )
}

export default App
