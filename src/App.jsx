// propTypes = a mechanism that ensures that the passed value
//             if of the correct datatype.
//             age: PropTypes.number

import Student from './Student/Student.jsx'

function App() {
  return (
    <>
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="SquidWard" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />           
    </>
  )
}

export default App
