import Scores from "./Scores"

const Students = (props) => {
  return (
    <>
    <br/>
      Name: {props.student.name}<br/><br/>
      Bio: {props.student.bio}<br/><br/>
      {props.student.scores.map(score=>
        <Scores key={score.score} score = {score.score} date = {score.date}/>
        )} 
    </>
  )
}

export default Students