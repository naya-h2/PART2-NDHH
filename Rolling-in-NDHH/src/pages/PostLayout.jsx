import { Outlet } from "react-router"

function PostLayout() {
  return (
    <>
      <nav></nav>
      <div><Outlet /></div>
      <button></button>
    </>
  )
}

export default PostLayout