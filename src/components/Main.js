import dog from '../img/dog1.svg';
import '../scss/Main.scss';
import AllPets from '../components/AllPets';
import reactDom from 'react-dom';

function Main( { data } ) {

    function showAllPets() {
        reactDom.render(<AllPets data={data} />, document.getElementById("rendering-container"));
        
    }

    return (
        <div className="frontpage-flex-container" id="rendering-container">
            <div className="all-pets-container" id="all-pets-container"></div>
            <div className="frontpage-left-container">
                <h1>Place for your pets.</h1>
                <div className="text-container">
                    <p className="pageContent">Choose your pets from differrent types of animals, including dogs, cats, rabbits and hamsters!
                        <br></br><br></br> Join us and create your pet today!</p>
                </div>
                <button id="register-button" className="black-button" title="register">REGISTER NOW</button>
            </div>

            <div className="pet-container" id="front-page-pet">
                <a href="#">
                    <button className="pet-card" title="go to pets" onClick={showAllPets}>
                        <div className="image-container">
                            <img className="petImage" src={dog} alt="doggo" />
                        </div>
                        <div className="text-container">
                            <h3>Rover</h3>
                            <p>Dog</p>
                            <p>Weight: 25kg</p>
                            <p>Level: 4</p>
                        </div>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Main;