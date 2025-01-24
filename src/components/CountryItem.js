import React from 'react';

function CountryItem({ item }) {
  return (
    <div key={item.name} className="countryItem-container">
      <div className="left-container">
       
       
        {item.media ? (
          <>
           <div className='imagetop'>
            {item.media.emblem && (
              <img
                src={item.media.emblem}
                alt={`Wappen von ${item.name}`}
                className="image emblem"
              />
            )}
            {item.media.orthographic && (
              <img
                src={item.media.orthographic}
                alt={`Flagge von ${item.name}`}
                className="orthographic"
              />
            )}
            </div>
            <div className='imagebottom'>
            {item.media.flag && (
              <img
                src={item.media.flag}
                alt={`Orthografische Projektion von ${item.name}`}
                className="flag"
              />
            )}
            </div>
          </>
        ) : (
          <div className='imagetop'>Kein Bild verfügbar</div>
        )}
      </div>
      
      <div className="right-container">
        <h3>{item.name}</h3>
        <div className='item-id'>{item.id}</div>
        <div><strong>Abkürzung:</strong> {item.abbreviation}</div>
        <div><strong>Hauptstadt:</strong> {item.capital}</div>
        <div><strong>Region:</strong> {item.region || 'Unbekannt'}</div>
        <div><strong>Währung:</strong> {item.currency}</div>
        <div><strong>Telefonvorwahl:</strong> +{item.phone}</div>
        <div>
          <strong>Bevölkerung:</strong>{' '}
          {item.population ? item.population.toLocaleString() : 'Nicht verfügbar'}
        </div>
      </div>
    </div>
  );
}

export default CountryItem;
