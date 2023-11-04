import { Outlet } from "react-router"

function CreateLayout() {
  return (
    <>
      <nav></nav>
      <div><Outlet /></div>
      <button></button>
    </>
  )
}

export default CreateLayout