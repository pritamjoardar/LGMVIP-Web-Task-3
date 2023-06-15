import "./App.scss"
import React, { useState } from 'react'

const Card = ({Name,Web,Img,Gender,Skill}) => {
  return (
    <>
    <div className="card">
      <div className="details">
        <h3>{Name}</h3>
        <h3>{Gender}</h3>
        <a target="blank" href={Web}><h3>{Web}</h3></a>
        <div><h3>{Skill}</h3></div>

      </div>
      <div className="image">
        <img src={Img} alt="" />
      </div>
    </div>
    </>
  )
}


const App = () => {
  const [data,setData]=useState([]);
  const [name,setName]=useState();
  const [web,setWeb]=useState();
  const [img,setImg]=useState();
  const [gender,setGender]=useState();
  const [skill,setSkill]=useState([]);

const handleChange=(event)=>{
  const {value,checked}= event.target;
  if(checked){
    setSkill(pre=>[...pre,value]);
  }else{
    setSkill(pre=>{
      return[...pre.filter(skills=>skills!==value)]
    })
  }
}
console.log(skill);
const submitHandler =(e)=>{
  e.preventDefault();
  setData([...data,{
    name:name,web:web,gender:gender,img:img,skill:skill
  }])
}
const Clear =(e)=>{
  e.preventDefault();
  data.clear();
}
  console.log(img);
  return (
    <>
   <nav>
    <h2>Student Enrollment Form</h2>
   </nav>
   <div className="con">
   
      <form action="" className="partition">
      <div><h2>Name</h2><input onChange={(e)=>{setName(e.target.value)}} type="text" name="" id="" /></div>
      <div><h2>Email</h2><input type="email" name="" id="" /></div>
      <div><h2>Website</h2><input onChange={(e)=>{setWeb(e.target.value)}} type="text" name="" id="" /></div>
      <div><h2>Image link</h2><input onChange={(e)=>{setImg(URL.createObjectURL(e.target.files[0]))}} type="file" name="" id="" /></div>
      <div className="gender"><h2>Gender</h2><div style={{height:"80px",display:"flex",flexDirection:"column",justifyContent:"center"}}><p style={{display:"flex"}}><input type="radio" name="gender" onChange={(e)=>{setGender(e.target.value)}} value="Male" id="" />Male</p><p style={{display:"flex"}}><input type="radio" name="gender" onChange={(e)=>{setGender(e.target.value)}} value="Female" id=""/>Female</p></div></div>
      <div><h2>Skills</h2><span><p><input type="checkbox" name="" value=" Java " id="" onChange={handleChange} />Java</p><p><input type="checkbox" value=" HTML " name="" id="" onChange={handleChange}/>HTML</p><p><input type="checkbox" name="" value=" CSS " id="" onChange={handleChange} />CSS</p></span></div>
      <div style={{justifyContent:"flex-start"}}><button onClick={submitHandler}>Enroll Student</button><button style={{backgroundColor:"crimson"}} onChange={Clear}>Clear</button></div>
    </form>
    <div className="partition0" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{backgroundColor:"rgb(47, 209, 141)",height:"80%",width:"5px",borderRadius:"4px"}}></div>
    </div>
    <div className="partition1">
      <nav style={{backgroundColor:"white"}}><h2 style={{color:"black"}}>Enrolled Students</h2></nav>
      <div style={{flexDirection:"column",height: "90%",display:"flex",overflow:"auto",justifyContent:"center",alignItems:"center",padding:"10px"}} className="con">
        {
          data.map((item,index)=>(
        <Card key={index} Name={item.name} Skill={item.skill} Img={item.img} Web={item.web} Gender={item.gender} />
          ))
        }
        

      </div>
    </div>
   </div>
   </>
  )
}

export default App
