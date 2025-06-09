import './App.css'


function App(props) {
  return (
    <div className="scoreCard">
      <h5>{props.title}</h5>
      <div className='flags'>
        <img className="image" src={props.flag2} alt="Team 1" />
        <img className="image image1" src={props.flag1} alt="Team 2" />
      </div>
     
     <div className='teamName'>
        <p className='team2'>{props.team2}</p>
        <p className='team1'>{props.team1}</p>
     </div>



      <div className='day'>{props.day}</div>
      <div className='message'>{props.message}</div>
      <div className='score'>
        <p>{props.score1}</p>
        <p>{props.score2}</p>
      </div>
    </div>
  )
}

export default App