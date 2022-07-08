const Total = ({course}) => {
    return ( <b><p>Total of {
          course.parts.reduce( function(sum, index){
            return sum + index.exercises
          },0)
      }  exercises</p></b> )
  }

  export {Total};
  