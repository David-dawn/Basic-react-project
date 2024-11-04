import profilePic from './assets/david.jpg'

function Card(){
 return(
    <div className="card">
        <img className='card-image' src={profilePic} alt="profile pic" />
        <h2 className='card-title'>Dave</h2>
        <p className='card-text'>I love to code and i love God!!</p>
    </div>
 )
}

export default Card