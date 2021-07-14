function Text(props) {
    return (
        <div className="text">
            <div className="title">
                {props.title}
            </div>
            <div className="subtitle">
                {props.subtitle}
            </div>
        </div>
    )
}

export default Text;