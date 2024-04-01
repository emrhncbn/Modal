import { useEffect, useState } from 'react'

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Modalı aç</button>
      {isOpen && (
        <Modal onClose={closeModal}>
        <h1 className='pb-2 text-lg font-bold'>Modal açık</h1>
        <button onClick={closeModal}>Kapalı</button>
      </Modal>
      )}
    </>
  )
}

function Modal({ children,onClose }) {
  // ref.showModal()
  return (
    <dialog open className='border-2 border-black p-4'>
    {children}
    </dialog>
    )
}
