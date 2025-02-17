import logo from '../assets/logo.png' //  chemin vers le logo
import '../styles/Banner.css'  // importation du fichier CSS

function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' /> 
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner