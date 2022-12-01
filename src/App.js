import React, { useState,useEffect} from 'react'
import { Rating } from 'react-simple-star-rating'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Josephus from './Images/josephus.gif'




function App() {
  //5star rating
  const [rating, setRating] = useState(0) 
    const handleRating = (rate) => {
    setRating(rate);
    alert("You have selected"+" "+ rate/20 + " Star")}


    //keyboard
    let text=""
    let countertwo=0
    let counterthree=0
    let counterfour=0
    let counterfive=0
    let countersix=0
    let counterseven=0
    let countereight=0
    let counternine=0
    //let [countertwo,counterthree,counterfour,counterfive,countersix,counterseven,countereight,counternine] = 0

    let b=0
    let c=0
    let d=0
    let e=0
    let f=0
    let g=0
    let h=0
    let i=0
   
   

    
      const Myfuncone=()=>{
       text=document.getElementById("myText")
       text.value=text.value+"1"     
         }

       /* const Timer = () => {
          setTimeout(() => {
            Myfunctwo();
          }, 1);
        }*/
      
      const Myfunctwo =()=>{
        countertwo++ 
      const twocounter=setInterval(()=>{ b+= (new Date().getMilliseconds().toLocaleString())-((new Date().getMilliseconds().toLocaleString())-1);
        if(b>900){b=0;countertwo=0;clearInterval(twocounter)}})
        
      if(countertwo===1){text=document.getElementById("myText")
       text.value=text.value+"2"}
      else if(countertwo===2){text=document.getElementById("myText")
       text.value=text.value.replace(/.$/,"a")}
      else if(countertwo===3){text=document.getElementById("myText")
       text.value=text.value.replace(/.$/,"b")}
      else if(countertwo===4){text=document.getElementById("myText")
       text.value=text.value.replace(/.$/,"c")}
      else if(countertwo>=5){text=document.getElementById("myText")
      countertwo=1;
       text.value=text.value.replace(/.$/,"2")} 
      else {text=document.getElementById("myText")
             text.value=text.value+""}          
          }
     const Myfuncthree =()=>{
            counterthree++
            const threecounter=setInterval(()=>{ c+= (new Date().getMilliseconds().toLocaleString())-((new Date().getMilliseconds().toLocaleString())-1);
              if(c>900){c=0;counterthree=0;clearInterval(threecounter)}})
          if(counterthree===1){text=document.getElementById("myText")
           text.value=text.value+"3"}
          else if(counterthree===2){text=document.getElementById("myText")
           text.value=text.value.replace(/.$/,"d")}
          else if(counterthree===3){text=document.getElementById("myText")
           text.value=text.value.replace(/.$/,"e")}
          else if(counterthree===4){text=document.getElementById("myText")
           text.value=text.value.replace(/.$/,"f")}
          else if(counterthree>=5){text=document.getElementById("myText")
          counterthree=1;
           text.value=text.value.replace(/.$/,"3")} 
          else {text=document.getElementById("myText")
                 text.value=text.value+"3"}
              }     
      const Myfuncfour =()=>{
                counterfour++
                const fourcounter=setInterval(()=>{ d+= (new Date().getMilliseconds().toLocaleString())-((new Date().getMilliseconds().toLocaleString())-1);
                  if(d>900){d=0;counterfour=0;clearInterval(fourcounter)}}) 
              if(counterfour===1){text=document.getElementById("myText")
               text.value=text.value+"4"}
              else if(counterfour===2){text=document.getElementById("myText")
               text.value=text.value.replace(/.$/,"g")}
              else if(counterfour===3){text=document.getElementById("myText")
               text.value=text.value.replace(/.$/,"h")}
              else if(counterfour===4){text=document.getElementById("myText")
               text.value=text.value.replace(/.$/,"i")}
              else if(counterfour>=5){text=document.getElementById("myText")
              counterfour=1;
               text.value=text.value.replace(/.$/,"4")} 
              else {text=document.getElementById("myText")
                     text.value=text.value+""}
                  }


       const Myfuncfive =()=>{
                    counterfive++
                    const fivecounter=setInterval(()=>{ e+= (new Date().getMilliseconds().toLocaleString())-((new Date().getMilliseconds().toLocaleString())-1);
                      if(e>900){e=0;counterfive=0;clearInterval(fivecounter)}}) 
                  if(counterfive===1){text=document.getElementById("myText")
                   text.value=text.value+"5"}
                  else if(counterfive===2){text=document.getElementById("myText")
                   text.value=text.value.replace(/.$/,"j")}
                  else if(counterfive===3){text=document.getElementById("myText")
                   text.value=text.value.replace(/.$/,"k")}
                  else if(counterfive===4){text=document.getElementById("myText")
                   text.value=text.value.replace(/.$/,"l")}
                  else if(counterfive>=5){text=document.getElementById("myText")
                  counterfive=1;
                   text.value=text.value.replace(/.$/,"5")} 
                  else {text=document.getElementById("myText")
                         text.value=text.value+""}
                      }  
                      
            const Myfuncsix =()=>{
                        countersix++
                        const sixcounter=setInterval(()=>{ f+= (new Date().getMilliseconds().toLocaleString())-((new Date().getMilliseconds().toLocaleString())-1);
                          if(f>900){f=0;countersix=0;clearInterval(sixcounter)}}) 
                      if(countersix===1){text=document.getElementById("myText")
                       text.value=text.value+"6"}
                      else if(countersix===2){text=document.getElementById("myText")
                       text.value=text.value.replace(/.$/,"m")}
                      else if(countersix===3){text=document.getElementById("myText")
                       text.value=text.value.replace(/.$/,"n")}
                      else if(countersix===4){text=document.getElementById("myText")
                       text.value=text.value.replace(/.$/,"o")}
                      else if(countersix>=5){text=document.getElementById("myText")
                      countersix=1;
                       text.value=text.value.replace(/.$/,"6")} 
                      else {text=document.getElementById("myText")
                             text.value=text.value+""}
                          }               

              const Myfuncseven =()=>{
                            counterseven++
                            const sevencounter=setInterval(()=>{ g+= (new Date().getMilliseconds().toLocaleString())-((new Date().getMilliseconds().toLocaleString())-1);
                              if(g>900){g=0;counterfour=0;clearInterval(sevencounter)}}) 
                          if(counterseven===1){text=document.getElementById("myText")
                           text.value=text.value+"7"}
                          else if(counterseven===2){text=document.getElementById("myText")
                           text.value=text.value.replace(/.$/,"p")}
                          else if(counterseven===3){text=document.getElementById("myText")
                           text.value=text.value.replace(/.$/,"q")}
                          else if(counterseven===4){text=document.getElementById("myText")
                           text.value=text.value.replace(/.$/,"r")}
                          else if(counterseven>=5){text=document.getElementById("myText")
                          counterseven=1;
                           text.value=text.value.replace(/.$/,"7")} 
                          else {text=document.getElementById("myText")
                                 text.value=text.value+""}
                              } 
                              
                              
                  const Myfunceight =()=>{
                                countereight++
                                const eightcounter=setInterval(()=>{ h+= (new Date().getMilliseconds().toLocaleString())-((new Date().getMilliseconds().toLocaleString())-1);
                                  if(h>900){h=0;countereight=0;clearInterval(eightcounter)}}) 
                              if(countereight===1){text=document.getElementById("myText")
                               text.value=text.value+"8"}
                              else if(countereight===2){text=document.getElementById("myText")
                               text.value=text.value.replace(/.$/,"s")}
                              else if(countereight===3){text=document.getElementById("myText")
                               text.value=text.value.replace(/.$/,"t")}
                              else if(countereight===4){text=document.getElementById("myText")
                               text.value=text.value.replace(/.$/,"u")}
                              else if(countereight>=5){text=document.getElementById("myText")
                              countereight=1;
                               text.value=text.value.replace(/.$/,"8")} 
                              else {text=document.getElementById("myText")
                                     text.value=text.value+""}
                                  } 
                                  
                      const Myfuncnine =()=>{
                                    counternine++
                                    const ninecounter=setInterval(()=>{ i+= (new Date().getMilliseconds().toLocaleString())-((new Date().getMilliseconds().toLocaleString())-1);
                                      if(i>900){i=0;counternine=0;clearInterval(ninecounter)}}) 
                                  if(counternine===1){text=document.getElementById("myText")
                                   text.value=text.value+"9"}
                                  else if(counternine===2){text=document.getElementById("myText")
                                   text.value=text.value.replace(/.$/,"v")}
                                  else if(counternine===3){text=document.getElementById("myText")
                                   text.value=text.value.replace(/.$/,"x")}
                                  else if(counternine===4){text=document.getElementById("myText")
                                   text.value=text.value.replace(/.$/,"y")}
                                  else if(counternine===5){text=document.getElementById("myText")
                                   text.value=text.value.replace(/.$/,"z")} 
                                  else if(counternine>=6){text=document.getElementById("myText")
                                  counternine=1;
                                   text.value=text.value.replace(/.$/,"9")} 
                                  else {text=document.getElementById("myText")
                                         text.value=text.value+""}
                                      }  
                                      
          //paper game
          const [user, setUser] = useState("")
          const [computer, setComputer] = useState("") 
          const [active, setactive] = useState('')
          const [usercount, setUsercount] = useState(0)
          const [computercount, setComputercount] = useState(0)
          const [win, setwin] = useState("")
        

          const Userchoice=()=>{
            let x=Math.floor(Math.random()*3)+1
            if(x===1){setactive(1);setComputer('Rock')}
            else if(x===2){setactive(2);setComputer('Paper')}
            else {(setactive(3));setComputer('Scissors')}
            }

            useEffect(() => {
              if(user==='Rock' && computer==='Paper'){setUsercount(prevUsercount=>prevUsercount+1);setwin("User wins!")}
            else if(user==='Rock' && computer==='Scissors'){setUsercount(prevUsercount=>prevUsercount+1);setwin("User wins!")}
            else if(user==='Paper' && computer==='Scissors'){setUsercount(prevUsercount=>prevUsercount+1);setwin("User wins!")}
            else if(user==='Paper' && computer==='Rock'){setComputercount(prevComputercount=>prevComputercount+1);setwin("Computer wins!")}
            else if(user==='Scissors' && computer==='Rock'){setComputercount(prevComputercount=>prevComputercount+1);setwin("Computer wins!")}
            else if(user==='Scissors' && computer==='Paper'){setComputercount(prevComputercount=>prevComputercount+1);setwin("Computer wins!")} 
            else if((user==='Rock' && computer==='Rock') || (user==='Paper' && computer==='Paper') || (user==='Scissors' && computer==='Scissors')){setwin("Game draw!")}
          }, [computer,user])
            
   //josephus
   const [soldier, setsoldier] = useState();
   const [survive, setsurvive] = useState();
   
   function josecalc() {  
   let m=Math.floor(Math.log2(soldier)) ;
   setsurvive(2*(soldier-(Math.pow(2,m)))+1)}                
      
       
         
        
        
        
         
                                   

  return (
    <>
    {/*5star rating */}
    <div className='heading'>5star rating</div><br/>
    <div className="container">
      <div className='head'>RATING(SELECT A STAR AMOUNT)
     <br/><br/><div className='App head'>
      <Rating onClick= {handleRating} ratingValue={rating}  allowHalfIcon="true" iconsCount={5} />
     </div><br/>
     <div className='number'>1 2 3 4 5</div>
     </div>
     </div>
     <hr/>

     {/*keyboard */}
     <div className='heading'>Keyboard</div><br/>
     <div className='keyboard'> 
     <div className='head'>
     <input type="text" style={{height:"30px",width:"200px"}}  id="myText"/><br/><br/>
     <button onClick={Myfuncone}  id="one" name='one'><div>1</div><div className='visibility-hidden'>111</div></button>
     <button onClick={Myfunctwo}  id="two"><div>2</div><div>abc</div></button>
     <button onClick={Myfuncthree}><div>3</div><div>def</div></button><br/>
     <button onClick={Myfuncfour}><div>4</div>ghi<div></div></button>
     <button onClick={Myfuncfive}><div>5</div><div>jkl</div></button>
     <button onClick={Myfuncsix}><div>6</div><div>mno</div></button><br/>
     <button onClick={Myfuncseven}><div>7</div>pqr<div></div></button>
     <button onClick={Myfunceight}><div>8</div>stu<div></div></button>
     <button onClick={Myfuncnine}><div>9</div>vxyz<div></div></button>
     </div>
     </div>
     <hr/>

     {/*paper game*/}
     <div className='heading'>Rock Paper Scissors game</div><br/>
     <div className="papergame">
     <button className={active===1?"active":""} onClick={(e)=>{setUser(e.target.value);setactive(1);Userchoice()}} value="Rock">Rock</button>
     <button className={active===2?"active":""} onClick={(e)=>{setUser(e.target.value);setactive(2);Userchoice()}} value="Paper">Paper</button>
     <button className={active===3?"active":""} onClick={(e)=>{setUser(e.target.value);setactive(3);Userchoice()}} value="Scissors">Scissors</button>
     </div>
     <div className='result'>
     <div>User's Choice:<b>{user}</b></div>
     <div>Computer's Choice:<b>{computer}</b></div>
     <div><span className='userwin'>User win:</span><b>{usercount}</b>     <span className='computerwin'>Computer win:</span><b>{computercount}</b></div>
     <b>{win}</b>
     </div>
     <hr/>

      {/*Josephus*/}
      <div className='heading'>Josephus game</div><br/>
      <div className='jose'>
      <img src={Josephus} className="img-fluid" width="500px" height="300px"/>
      <div className='text-success text-center'><h4>{`One killed besides others and finally
         who will survive?`}</h4></div>
      <div><label>No.of soldier:</label><input type="text" value={soldier} onChange={(e)=>setsoldier(e.target.value)}/></div><br/>
      <button type='submit' onClick={josecalc}>Submit</button>
      <div><b>Final survive soldier number:</b><span className='text-primary h5'>{survive}</span></div>
      </div>
      <hr/>
    </>
       
  );
}

export default App;
