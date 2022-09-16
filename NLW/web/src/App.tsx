import './styles/main.css';
import logoImg from './Assets/Logo-nlw-esports.svg'

function App() {
  return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-clip-text bg-nlw-gradient">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-20">
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt=""/> 
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
             <strong className="font-bold text-white block">League of Legends</strong>
            <span className=" text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt=""/> 
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
             <strong className="font-bold text-white block">Apex Legends</strong>
            <span className=" text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt=""/> 
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
             <strong className="font-bold text-white block">Conter Strike</strong>
            <span className=" text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt=""/> 
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
             <strong className="font-bold text-white block">World of Warcraft</strong>
            <span className=" text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt=""/> 
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
             <strong className="font-bold text-white block">Dota 2</strong>
            <span className=" text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt=""/> 
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
             <strong className="font-bold text-white block">Fortnite</strong>
            <span className=" text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
        </a>


        
          
      </div>
    </div>
  )
}
export default App