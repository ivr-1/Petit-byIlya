import './footer.css'
import Social from './elements/socialicons';

function Footer(){
    
    return (
        <div className="footer-section">
            <div className="footer-left"> 
                <p>© 2025 Le Petit Croissant</p>
                <p>Demo website</p>
            </div>
            <div className="footer-middle"> 
                
                <a 
                    href="https://byIlya.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    made by Ilya
                </a>

             </div>
             <div className="footer-right">
                <Social iconGap="15px" iconSize="20px"/>
             </div>
             
        </div>
    )
}

export default Footer;