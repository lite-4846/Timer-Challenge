import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState(null);

  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section className='flex flex-col items-center '> 
      <h1 className='text-5xl mt-2 font-title text-zinc-300'>
        The <span className='text-emerald-500'>Almost</span> final Countdown
      </h1>
      <p className='mb-6 mt-2 text-teal-300 tracking-widest'>
        Stop the time when you know the time is (almost) up
      </p>
      <h2 className='text-2xl mb-4 text-zinc-300 fill-slate-800 font-mono font-semibold'>
        Welcome {name ?? 'unknown entity!!'}!!
      </h2>
      <p className='flex justify-between mb-6'>
        <input
          className='text-slate-100 text-lg font-semibold placeholder:italic placeholder:text-slate-400 bg-teal-800 border border-slate-500 rounded-s-lg py-2 pl-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-green-500 focus:ring-1 sm:text-sm w-32'
          placeholder='Name'
          type='text'
          ref={playerName}
        />
        <button
          onClick={handleClick}
          className='border border-slate-500 px-4 rounded-e-lg hover:bg-teal-300 hover:text-black font-mono transition-all ease-in-out hover:border-teal-600'
        >
          submit
        </button>
      </p>
    </section>
  );
}
