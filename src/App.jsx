
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ReccomendationPage from './pages/ReccomendationPage'
import HomePage from './pages/HomePage'

function App() {
  const router  = createBrowserRouter([{path:"", element:<HomePage/>}, {path:"/recomend", element:<ReccomendationPage/>}])
  return (
     <RouterProvider router={router}/>
  )
}

export default App
