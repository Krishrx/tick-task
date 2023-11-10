import { useSelector } from "react-redux"
function Footer() {
    const isDark = useSelector((state) => state.toast.isDark);
  return (
    <footer className={`flex justify-center items-center px-2 py-4 gap-1 font-poppins ${isDark?'bg-darkBackground text-darkText':'bg-background text-text'}`}>
        <h1 className='font-medium'>Made By <a href="https://github.com/Krishrx" className={`font-semibold ${isDark?'text-primary':'text-primary'}`}>Krish</a>💜</h1>
    </footer>
  )
}

export default Footer