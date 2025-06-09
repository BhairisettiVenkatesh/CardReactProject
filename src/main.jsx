import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import India from './assets/india.jpeg'
import Ireland from './assets/ireland.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App flag1={India} flag2={Ireland} team1={'INDIA'} team2={'IRELAND'} tea title='ODI-1' message="IND won by 8 wickets(46 balls)" day='5 Jun 24' score1='96 (16)' score2='97/2 (12.2)'  />
    <App flag1={Ireland} flag2={India} team1={'IRELAND'} team2={'INDIA'} title='ODI-2' message="IRE won by 5 wickets(3 balls)" day='9 Jun 24' score1='98/5 (20)' score2='99/5 (19.3)' />
    <App flag1={India} flag2={Ireland} team1={'INDIA'} team2={'IRELAND'} tea title='ODI-3' message="IRE won by 6 wickets" day='12 Jun 24' score1='96 (16)' score2='97/2 (12.2)'  />   
    <App flag1={India} flag2={Ireland} team1={'INDIA'} team2={'IRELAND'} tea title='ODI-4' message="IND won by 8 wickets(46 balls)" day='15 Jun 24' score1='96 (16)' score2='97/2 (12.2)'  />
    <App flag1={India} flag2={Ireland} team1={'INDIA'} team2={'IRELAND'} tea title='ODI-5' message="IND won by 8 wickets(46 balls)" day='20 Jun 24' score1='96 (16)' score2='97/2 (12.2)'  />
    <App flag1={India} flag2={Ireland} team1={'INDIA'} team2={'IRELAND'} tea title='T20-1' message="IND won by 8 wickets(46 balls)" day='22 Jun 24' score1='96 (16)' score2='97/2 (12.2)'  />
    <App flag1={India} flag2={Ireland} team1={'INDIA'} team2={'IRELAND'} tea title='T20-2' message="IND won by 8 wickets(46 balls)" day='24 Jun 24' score1='96 (16)' score2='97/2 (12.2)'  />
    <App flag1={India} flag2={Ireland} team1={'INDIA'} team2={'IRELAND'} tea title='T20-3' message="IND won by 8 wickets(46 balls)" day='27 Jun 24' score1='96 (16)' score2='97/2 (12.2)'  />
    <App flag1={India} flag2={Ireland} team1={'INDIA'} team2={'IRELAND'} tea title='T20-4' message="IND won by 8 wickets(46 balls)" day='29 Jun 24' score1='96 (16)' score2='97/2 (12.2)'  />
 </StrictMode>  
)
