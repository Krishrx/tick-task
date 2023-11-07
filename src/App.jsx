import ActionBtns from "./components/ActionBtns"
import Header from "./components/Header"
import Notification from "./components/Notification"
import TaskFields from "./components/TaskFields"

function App() {

  return (
      <div className="bg-background text-text font-poppins w-full h-full">
      <Header />
      <Notification />
      <TaskFields />
      <ActionBtns/>
      </div>
  )
}

export default App
