import { useNavigate, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import ChatBox from './ChatBox'

function Room() {
  const navigate = useNavigate()
  const { id } = useParams()

  if (!id) {
    navigate('/join')
  }
  
  const socket = io(import.meta.env.VITE_SERVER_URL)
  
  socket.emit('join-room', id)

  
  
  return (
    <main>
      <div>
        <h1>Room {id}</h1>
        <ChatBox socket={socket}/>
      </div>
      
    </main>
    
  )
}

export default Room