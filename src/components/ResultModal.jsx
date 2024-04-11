import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, time, onReset },
  ref
) {
  const dialog = useRef();
  const formattedTime = (time / 1000).toFixed(2);
  const score = Math.round((1 - time / (targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className='my-auto px-12 py-8 bg-teal-100 rounded-lg text-neutral-900 text-start backdrop:bg-black backdrop:bg-opacity-60'
    >
      <h2 className='font-title text-teal-900 font-semibold text-3xl mb-8'>
        {time > 0 ? `Your Score: ${score}` : 'Lost'}!
      </h2>
      <p className='text-lg mb-2'>
        The target time was{' '}
        <span className='font-semibold text-emerald-800'>{targetTime} seconds.</span>
      </p>
      {time > 0 ? (
        <p className='text-md mb-2'>
          You clicked before{' '}
          <span className='font-semibold text-emerald-800'>{formattedTime} seconds.</span>
        </p>
      ) : (
        <p>Timer Expired</p>
      )}
      <form className='text-end mt-4' method='dialog' onSubmit={onReset}>
        <button className='bg-slate-900 py-2 px-6 text-neutral-300 rounded font-semibold'>
          Close
        </button>
      </form>
    </dialog>,
    document.body
  );
});

export default ResultModal;
