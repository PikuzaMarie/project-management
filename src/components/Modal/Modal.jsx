import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { PrimaryButton } from '../PrimaryButton';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

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
      className="m-auto rounded-md p-8 shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="mt-4 flex justify-end">
        <PrimaryButton>{buttonCaption}</PrimaryButton>
      </form>
    </dialog>,
    document.getElementById('modal-root'),
  );
});

export { Modal };
