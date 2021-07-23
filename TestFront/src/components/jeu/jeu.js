import React, {Fragment, useEffect,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Button } from 'reactstrap';
import { getAllnoms } from '../../redux/actions/nomAction';

function Jeu() {
  //inisialisation de state 
  const noms = useSelector((state) => state.noms);
  
  const dispatch = useDispatch();
  //inisalisation de varible score 
  const [score, setScore] = useState(10);
  useEffect(() => {
    
    dispatch(getAllnoms())
  }, [ dispatch]);
  //indice pour chaque nom
  const [n, setN] = useState(1);
  // la methode pour le boutton jouer
const commancejeux =async () => {
   

  document.getElementById("jeux").style.display = 'none';
  document.getElementById("nomsuivant").style.display = 'block';
 
}
// la methode pour implemter l'api et faire la comparaison Male
const nomsuivantm =async (a) => {
  if(score==0) {console.log('ratté')
  document.getElementById("nomsuivant").style.display = 'none';
  document.getElementById("score").style.display = 'block';
  }
 else if(score==20){console.log('vous avez gagner')
  document.getElementById("score").style.display = 'block';
  document.getElementById("nomsuivant").style.display = 'none';
 }
 else{
  setN(n+1);
  try {
    var GenderApi = require('gender-api.com-client');
  
    var genderApiClient = new GenderApi.Client('2Z4DMAJxQSkErzJqu4KjFeESJf8Q8MUMJyt7');
  
    genderApiClient.getByFirstName(a, function (response) {
        console.log(response.gender); //votre sexe
        if(document.getElementById("male"))   
        {
          if(response.gender == 'male'){
            console.log('admis ')
            setScore(score+1);
          }
         
          else {
            console.log('non admis')
            setScore(score-1);
          }
        } 
      
       
       
       
     
    });
  
    
  
  }
  catch(e) {
    console.log('Error:', e);
  }
  
   
  document.getElementById("nomsuivant").style.display = 'block';
}
}
// la methode pour implemter l'api et faire la comparaison female
const nomsuivantf =async (a) => {
  if(score==0) {console.log('ratté')
            document.getElementById("nomsuivant").style.display = 'none';
            document.getElementById("score").style.display = 'block';
  }
  else if(score==20){console.log('vous avez gagner')
            document.getElementById("score").style.display = 'block';
            document.getElementById("nomsuivant").style.display = 'none';
 }
 else{
  setN(n+1);
  try {
    var GenderApi = require('gender-api.com-client');
  
    var genderApiClient = new GenderApi.Client('2Z4DMAJxQSkErzJqu4KjFeESJf8Q8MUMJyt7');
  
    genderApiClient.getByFirstName(a, function (response) {
        console.log(response.gender); //votre sexe
       
        if(document.getElementById("female"))   
        {
          if(response.gender == 'female'){
            
            setScore(score+1);
          }
         
          else {
          
            setScore(score-1);
          }
        } 
       
       
     
    });
  
    
  
  }
  catch(e) {
    console.log('Error:', e);
  }

  
  document.getElementById("nomsuivant").style.display = 'block';
}
}






    return (
        <div>
          <div id="jeux">
            <h3 style={{marginLeft:'400'}}>
            bienvenu a notre petit jeux alors le principe est simple un 
              liste de nom va s's'afficher et vous choisissez le genre du nom
              si vous faites 10 correctes reponses vous gagnez
              mais apres 10 incorrect esseies vous  perdrez

            </h3>
            <button onClick={commancejeux} style={{marginLeft:'800px', marginTop:'50px', width:'100px' ,height:'40px',backgroundColor:'#87CEEB',fontSize:'20px'}} >Jouer</button>
          </div>
          <div id="nomsuivant" style={{display:'none'}} >
          {noms.map((nom) => (
           

            <Fragment>
               { nom.n ==n ?
                   <div style={{margin:'40px'}}>
            
                       <h3 style={{marginLeft:'500px'}}>ce nom est il masculin ou feminin : {nom.nomcomplet}</h3>
                       <button id="male" onClick={() => nomsuivantm(nom.nomcomplet)} style={{marginLeft:'500px', marginTop:'50px', width:'100px' ,height:'40px',backgroundColor:'#87CEEB',fontSize:'20px'}}> masculin</button>
                       
                       <button id="female" onClick={() => nomsuivantf(nom.nomcomplet) } style={{marginLeft:'140px', marginTop:'50px', width:'80px' ,height:'40px',backgroundColor:'#DB7093',fontSize:'20px'}} > feminin</button>
                    </div>
              :
              <h3></h3>
            }
            </Fragment>
            
          ))}
          </div>
          <div id='score' style={{display:'none'}}>
            {score==20 ?
            <h1>feliciation vous avez gagner votre score est 20  </h1>
            
            :
            
            <h1></h1>
}
{score==0 ?
            <h1> a la prochaine  </h1>
            
            :
            
            <h1></h1>
}
          </div>
        </div>
    )
}

export default Jeu
