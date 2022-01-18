import "./Main.css"
import Tooltip from '@mui/material/Tooltip';

export default function Main (){
    
    return (
    <div className="main" id="main">
              
        <div className="main-component">
        
            <div className="content-left">
                    
                    <h2>Track your</h2>
                    <h1>TABLETOP </h1>    
            <p>All your tabletop RPG gameplay in one place.</p>
            </div>
            <Tooltip title="Move me ;)" followCursor>
            <div className="content-right">
           
            <iframe src='https://my.spline.design/dice-0741ee64ea1138f7e186217301b431c9/' frameborder='0' width='100%' height='100%'></iframe>            
            </div>
            </Tooltip>

        </div>
    </div>
   
);

      

}