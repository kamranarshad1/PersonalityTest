import Navbar from './components/Navbar'
import Shadow from './components/Shared/Shadow'
import Layout from './components/Layout'
import './App.css'

function App() {
  return (
    <div className='w-full min-h-screen relative overflow-hidden bg-gray-400 flex flex-col items-center text-center pt-[50px] px-0 pb-0 box-border gap-[55px] tracking-[normal] font-urbanist lg:gap-[40px] mq825:gap-[33px]'>
      <Shadow />
      <Navbar />
      <Layout />
    </div>
  )
}

export default App
