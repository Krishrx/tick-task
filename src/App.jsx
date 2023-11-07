import Header from "./components/Header"
import Notification from "./components/Notification"
import TaskFields from "./components/TaskFields"
import { useSelector } from "react-redux"
function App() {
  const {showToast,typeOfToast,messageOnToast} = useSelector(state => state.toast);
  return (
      <div className="bg-background text-text font-poppins w-full h-full">
      <Header />
      <Notification showToast={showToast} typeOfToast={typeOfToast} messageOnToast={messageOnToast}/>
      <TaskFields />
      </div>
  )
}

export default App
