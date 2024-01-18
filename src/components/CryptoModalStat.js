import "../css/CryptoList.css";

export default function CryptoModalStat({text, data, unit=""}) {
    return(
        <div className="crypto__modal-stat">
            <p>{text}</p>
            <p>{data} {unit}</p>
        </div>
    )
}