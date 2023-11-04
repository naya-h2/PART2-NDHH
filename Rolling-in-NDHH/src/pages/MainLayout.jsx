import { Outlet } from "react-router"

function MainLayout() {
  return (
    <>
      <nav></nav>
      <div><Outlet /></div>
      <button></button>
    </>
  )
}

export default MainLayout