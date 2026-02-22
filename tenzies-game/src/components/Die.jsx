import "./Die.css"
export default function (props) {

    const btn = props.value.map((val) => {
        return <button
            className={val.isHeld ? "held" : ""}
            key={val.id}
            onClick={() => props.hold(val.id)}
        >
            {val.value}
        </button>
    })
    return (
        <>
            <div className="die-buttons">
                {btn}
            </div>
        </>
    )
}