import './App.css'
import Avatar from './assets/avatar.svg'
import LinkedinImage from './assets/linkedin.svg'
import InstagramImage from './assets/instagram.svg'
import PortfolioImage from './assets/portifólio.svg'
import GithubImage from './assets/github.svg'

function App() {

  return (
    <div className='container'>
      <img src={Avatar} alt='avatar' />
      <h1> Bruno Vinícius </h1>
      <p> Full Stack <span> Developer </span> </p>
      <div className='container-buttons'>
        <div className='container-button1'>
          <a href='https://www.linkedin.com/in/brunobarreiras/' target='_blank'> <button className='linkedin button'> <img src={LinkedinImage} alt='linkedin' /> LinkedIn </button> </a>
          <a href='https://www.instagram.com/brunowzz/' target='_blank'> <button className='instagram button'> <img src={InstagramImage} alt='instagram' /> Instagram </button> </a>
        </div>
        <div className='container-button2'>
          <a href='#'> <button className='portfolio button'> <img src={PortfolioImage} alt='portfolio' /> Portfólio </button> </a>
          <a href='https://github.com/brunowzz' target='_blank'> <button className='github button'> <img src={GithubImage} alt='github' /> GitHub </button> </a>
        </div>
      </div>

    </div>
  )
}

export default App
