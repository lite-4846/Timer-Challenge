import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [time, setTime] = useState(targetTime * 1000);  

  if(time <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function Reset () {
    setTime(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTime(prev => prev - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    
    clearInterval(timer.current);
  }

  const bool = time > 0 && time < targetTime * 1000;

  let timeRunningStyles = 'mb-6 text-gray-800 text-sm mt-4';
  if (bool) timeRunningStyles += ' animation-pulse text-slate-100';

  return (
    <>
      <ResultModal onReset={Reset} ref={dialog} targetTime={targetTime} time={time}/>
      <section className=' bg-teal-500 rounded-lg px-12'>
        <h2 className='text-3xl mt-4 text-neutral-900 font-semibold font-title'>
          {title}
        </h2>
        <p className='my-4 font-mono border border-zinc-800 rounded text-slate-800 '>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p className='mt-6 mb-2'>
          <button
            onClick={bool ? handleStop : handleStart}
            className=' bg-gray-900 rounded px-4 py-1'
          >
            {bool ? 'Stop' : 'Start'} Challenge!
          </button>
        </p>
        <p className={timeRunningStyles}>
          {bool ? 'Time is running...' : 'Timer Inactive'}
        </p>
      </section>
    </>
  );
}