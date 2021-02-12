import '../scss/AllPets.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import PetCard from './PetCard';

function AllPets( { data } ) {

    return (
        <div className="pets-flex-container">
            <div className="button-container">
                <div className="bar-pet-name">
                    <h3>Karel's pets</h3>
                </div>
                <div className="bar-buttons-container">
                    <button id="add-pet-button" className="black-button">add new <i><FontAwesomeIcon icon={faPlusCircle} /></i></button>
                </div>
            </div>

            <div className="pet-container">
                {data.map((pet, i) => {
                    return <PetCard key={i} {...pet} />
                })}
            </div>
        </div>
    );
}

export default AllPets;