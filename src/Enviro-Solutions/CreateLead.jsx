import Menubar from "./Menubar"
import Navbar from "./Navbar"

const CreateLead = () => {
  return (
    <div className="flex">
      <Menubar />
      <div className="flex-1 ml-64"> {/* Adjust margin left to match Menubar width */}
        <Navbar />
        <p>create lead content</p>
      </div>
    </div>
  )
}

export default CreateLead 