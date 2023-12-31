import Header from "./components/Header"
import Notification from "./components/Notification"
import TaskFields from "./components/TaskFields"
import { useSelector } from "react-redux"
import TodoTask from "./components/TodoTask";
import Footer from "./components/Footer";
function App() {
  const { showToast, typeOfToast, messageOnToast,isDark } = useSelector(state => state.toast);
  return (
      <>
      <div className={`font-poppins w-full min-h-screen max-h-full ${isDark?'bg-darkBackground text-darkText':'bg-background text-text '}`}>
      <Header />
      <Notification showToast={showToast} typeOfToast={typeOfToast} messageOnToast={messageOnToast}/>
      <TaskFields />
      <TodoTask />
      </div>
      <Footer/>
    </>
  )
}

export default App
