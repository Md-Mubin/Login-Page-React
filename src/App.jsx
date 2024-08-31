// ================== All Imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import DarkVersion from "./component/Dark/DarkVersion"
import LightVersion from "./component/Light/LightVersion"


function App() {

  // Route Start
  const ARDOX = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/"               element={<DarkVersion/>}/>
        <Route path="/light_version"  element={<LightVersion/>}/>
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
