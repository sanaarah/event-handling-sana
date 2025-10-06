import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">

      <div className="header">
        <h2>Event Name</h2>
        <nav>
          <ul>
            <li>Event Details</li>
            <li>Speaker</li>
            <li>Schedule</li>
          </ul>
        </nav>
      </div>

      <div className='Event-details'>
        <h3>Event Details</h3>
        <p>this event is made by us yenepoya students </p>
        <ul>
          <li>Date: 10/10/2025</li>
          <li>Time:10:00 pm</li>
          <li>Venue:manglore</li>
        </ul>
      </div>

      <div className='Speakers'>
        <h3>Speakers</h3>
        <div className='Speaker-1'>
          <h4>Sana Arah</h4>
          <img src="" alt='sana.jpg'/>
          <p>blah blah blah</p>
        </div>

        <div className='Speaker-2'>
          <h4>Sana Arah</h4>
          <img src="" alt='sana.jpg'/>
          <p>blah blah blah</p>
        </div>
      </div>

      <div className='Schedule'>
        <h2>Event schedule</h2>
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
          <li>Event 4</li>
          <li>Event 5</li>
        </ul>
      </div>

      <div className='button'>
        <button>Register now</button>
      </div>

      <div className='footer'>
        <footer>Contact Info: 9743500415</footer>
      </div>

    </div>

  )
}

export default App
