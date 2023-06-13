import { signInWithGoogle } from '../../firebase'

const Loguin = () => {
  return (
    <div className="dashboard">
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Loguin
