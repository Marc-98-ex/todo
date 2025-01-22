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
          <p>Kein Bild verfügbar</p>
        )}
      </div>
      <div className="desc-container">
        <h3>{item.name}</h3>
        <p>{item.id}</p>
        <p><strong>Abkürzung:</strong> {item.abbreviation}</p>
        <p><strong>Hauptstadt:</strong> {item.capital}</p>
        <p><strong>Region:</strong> {item.region || 'Unbekannt'}</p>
        <p><strong>Währung:</strong> {item.currency}</p>
        <p><strong>Telefonvorwahl:</strong> +{item.phone}</p>
        <p>
          <strong>Bevölkerung:</strong>{' '}
          {item.population ? item.population.toLocaleString() : 'Nicht verfügbar'}
        </p>
      </div>
    </div>
  );
}

export default CountryItem;
