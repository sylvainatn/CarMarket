// src/components/CarItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CarItem = ({ car, addToFavorites, showAddToFavorites }) => {
    const handleAddToFavorites = () => {
        addToFavorites(car);
        alert(`${car.name} a été ajouté aux favoris !`);
    };

    return (
        <div className="card h-100 d-flex flex-column" style={{ margin: '10px', cursor: 'pointer' }}>
            <Link to={`/cars/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={car.image} className="card-img-top" alt={car.name} />
                <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <h6 className="card-text">Prix : {car.price} €</h6>
                    <p className="card-text">Année : {car.year}</p>
                    <p className="card-text">Kilométrage : {car.mileage} km</p>
                    <p className="card-text">Carburant : {car.fuel}</p>
                    <p className="card-text">Boîte de vitesse : {car.transmission}</p>
                    <p className="card-text">Localisation : {car.location}</p>
                </div>
            </Link>
            {showAddToFavorites && (
                <button 
                    onClick={handleAddToFavorites} 
                    className="btn btn-outline-danger mt-auto"
                    style={{ margin: '10px' }}
                >
                    Ajouter aux Favoris
                </button>
            )}
        </div>
    );
};

export default CarItem;
