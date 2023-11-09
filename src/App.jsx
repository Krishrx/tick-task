import Header from "./components/Header"
import Notification from "./components/Notification"
import TaskFields from "./components/TaskFields"
import { useSelector } from "react-redux"
import TodoTask from "./components/TodoTask";
import Footer from "./components/Footer";
function App() {
  const {showToast,typeOfToast,messageOnToast} = useSelector(state => state.toast);
  return (
      <div className="bg-background text-text font-poppins w-full min-h-screen max-h-full">
      <Header />
      <Notification showToast={showToast} typeOfToast={typeOfToast} messageOnToast={messageOnToast}/>
      <TaskFields />
      <TodoTask />
      <Footer/>
      </div>
  )
}

export default App
