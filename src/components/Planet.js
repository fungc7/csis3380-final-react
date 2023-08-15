function Planet (props) {
    return (
          <div className="card">
              <button 
                type="button" 
                class="remove-card"
                aria-label="Close"
                onClick={() => { props.removeCard(props.planetId) }}
              >X</button>
            <div>
              <img src={props.planetUrl} alt={props.planetName}></img>
            </div>
            <h2>{props.planetName}</h2>
            <p>{props.desc}</p>
            <ul>
              <li><strong>Diameter:</strong> {props.diameter}</li>
              <li><strong>Moons:</strong> {props.moons}</li>
            </ul>
          </div>
    );
}

export default Planet;