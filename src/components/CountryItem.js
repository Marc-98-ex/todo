import React from 'react';

function CountryItem({ item }) {
  return (
    <div key={item.name} className="countryItem-container">
      <div className="image-container">
        {item.media ? (
          <>
            {item.media.emblem && (
              <img
                src={item.media.emblem}
                alt={`Wappen von ${item.name}`}
                className="image emblem"
              />
            )}
            {item.media.flag && (
              <img
                src={item.media.flag}
                alt={`Flagge von ${item.name}`}
                className="image flag"
              />
            )}
            {item.media.orthographic && (
              <img
                src={item.media.orthographic}
                alt={`Orthografische Projektion von ${item.name}`}
                className="image orthographic"
              />
            )}
          </>
        ) : (
          <div>Kein Bild verfügbar</div>
        )}
      </div>
      <div className="desc-container">
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
