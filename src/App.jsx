import Header from "./components/Header"
import Body from "./components/Body"
import {  BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Create from "./components/Create"
import BlogDetails from "./components/BlogDetails"
import NotFound from "./components/NotFound"


function App() {


  return (
    <>
      <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route exact path="/"  element={<Body />}/> 
          <Route path="create"  element={<Create />}/> 
          <Route path="/secret/:id"  element={<BlogDetails />}/>
          <Route path="*"  element={<NotFound />}/>
        </Routes>
      </main>
        
      </BrowserRouter>
    </>
  )
}

export default App
