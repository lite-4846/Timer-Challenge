import './App.css'
import Player from './components/Player'
import TimerChallenge from './components/TimerChallenge'

function App() {

  return (
    <main className='bg-gray-800 rounded-3xl my-8 mx-auto p-8 '>
      <Player/>
      <div id='container' className='flex flex-wrap gap-16 justify-evenly text-center my-8 mx-16'>
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Medium" targetTime={5}/>
        <TimerChallenge title="Hard" targetTime={10}/>
        <TimerChallenge title="Expert" targetTime={15}/>
      </div>
    </main>
  )
}

export default App
