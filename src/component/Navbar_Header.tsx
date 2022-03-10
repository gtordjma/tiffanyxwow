import logo from '../img/nav-logo.png'
import navbar_discord from '../img/nav-discord.png'
import navbar_twitter from '../img/nav-twitter.png'
import navbar_insta from '../img/nav-insta.png'

function Navbar_Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="#"><img className='navbar-brand-logo' src={logo} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link navbar-social" href="https://discord.gg/bjBweaZmCQ"><img src={navbar_discord} /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-social" href="https://twitter.com/TiffanyXWoW"><img src={navbar_twitter} /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-social" href="https://www.instagram.com/tiffanyxwow/"><img src={navbar_insta} /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-mint" href="#">MINT SOON</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar_Header;