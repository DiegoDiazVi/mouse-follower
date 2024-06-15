import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  useEffect(() => {
    const handleMove = (evt) => {
      const { clientX, clientY } = evt;
      setPosition({ x: clientX, y: clientY});
    }

    if(enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    //cleanUp
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnable(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
