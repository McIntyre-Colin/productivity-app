import React from 'react';
import { useEffect , useState } from 'react';

import './Home.css';
import Panel from '../../assets/Panel/Panel.js'

const panelData = [
 {
  'title': 'Project 1',
 },
 {
  'title': 'Project 2',
 },
 {
  'title': 'Project 3',
 },
]

function Home(props) {


 const [panel, setPanel] = useState(panelData)

  
  return (
    <div className="Home">
        <div className='Home-Content'>
            <Panel title="Garden"/>
            <Panel title="Hive"/>
           
         </div>
         <div className='Home-Content'>
            {
              panel.map((project) => (
                <Panel title = {project.title}/>
              ))}
         </div>
   
    </div>
  );
}

export default Home;