// import logo from '../assets/parrot.png'
import logo from '../assets/placeholder.png'

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header-content'>
                <img src={logo} style={{maxWidth:'100px'}} alt="PollyGlot's Parrot as the app logo." />
                <div className='header-content-text'>
                    <h1>Title</h1>
                    <p>Subtitle</p>
                </div>
            </div>
        </div>
    )
}