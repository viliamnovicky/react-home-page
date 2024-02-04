export default function WeatherCont({icon1, icon2, data1, data2, unit1, unit2}) {
    
  return (
    <div className="weather__info">
      <img className="weather__icon--small" alt={icon1} src={icon1}></img>
      <p className="weather__cond">{data1}{unit1}</p>
      <img className="weather__icon--small" alt={icon2} src={icon2}></img>
      <p className="weather__cond">{data2}{unit2}</p>
    </div>
  );
}
