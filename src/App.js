import Navbar_Header from './component/Navbar_Header.tsx';
import center_img from './img/center-logo.png'
import wow_img from './img/wow.png'
import gift_img from './img/gift.png'
import world_img from './img/world.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='cont1' className="app-container container-fluid"><Navbar_Header />
        <div className='cont1-center'>
          <img src={center_img} />
          <div>READ MORE</div>
        </div>
        <div className='cont1-footer'>
          <a href='https://twitter.com/TiffanyXWoW'>Twitter</a>
          <a href='https://discord.gg/bjBweaZmCQ'>Discord</a>
        </div>
      </div >
      <div id='cont2' className="app-container container-fluid"><Navbar_Header />
        <div className='cont2-center'>
          <ol>
            <li>Deconstructed</li>
            <li>Reconstructed</li>
            <li>Refined</li>
            <li>Tiffany Added</li>
          </ol>
        </div>
      </div>
      <div id='cont3' className="app-container container-fluid"><Navbar_Header />

        <div className="cont3-img">
          <img src={wow_img} />
        </div>

        <div className="cont3-txt">
          <h2>WOW DNA<br />Tiffany added</h2>
          <p>There are no duplicates of the original World of Women Assortment.<br />
            World of Women X Tiffany are driving uniqueness through refinement.<br />
            No two World of Women X Tiffany are the same.<br />
            Each World of Women X Tiffany is UNIQUE. World of Women DNA.
            Tiffany extra Added.  No Duplicates.<br />
            Tiffany X WOW is a homage to WOW project and to the Tiffany brand.</p>
        </div>
      </div>
      <div id='cont4' className="app-container container-fluid"><Navbar_Header />
        <div className="cont4-txt">
          <h2>Rewarding our Family</h2>
          <p>
            Community is family:<br />We will reward our lucky holders with the most exclusive gifts :<br />
            - 1 ROLEX Oyster Perpetual TIFFANY blue dial<br />
            - 1 TIFFANY&Co X SPALDING Basketball<br />
            - 1 TIFFANY&Co Poker game<br />
            - 2 TIFFANY&Co table tennis paddles set<br />
            - 10 TIFFANY&Co Playing cards <br />
          </p>
        </div>
        <div className="cont4-img">
          <img src={gift_img} />
        </div>
      </div>
      <div id='cont5' className="app-container container-fluid"><Navbar_Header />
        <div className="cont5-img">
          <img src={world_img} />
        </div>

        <div className="cont5-txt">
          <h2>ROADMAP</h2>
          <p>Coming soon....</p>
        </div>
      </div>
      <div id='cont6' className="app-container container-fluid"><Navbar_Header />
        <div className='cont6-center'>
          <h2>#BLUEARMY</h2>
          <div>MINT SOON</div>
        </div>
      </div>
    </div >
  );
}

export default App;
