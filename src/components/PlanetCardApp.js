import Planet from "./Planet";

function PlanetCardApp (props) {
    const [planetData, setPlanetData] = useState(props.planets);
  
    const handleRemovePlanet = (id) => {
      setPlanetData( planetData.filter(p => p.id !== id) );
    }
  
    return (
      <div className={"container"}>
        {planetData.map(
        planet => 
        <Planet
          planetId={planet.id}
          planetName={planet.name}
          diameter={planet.diameter} 
          moons={planet.moons}
          desc={planet.desc}
          planetUrl={planet.url}
          removeCard={handleRemovePlanet}
         />
        )}
      </div>
      
    );
  }

export default PlanetCardApp;