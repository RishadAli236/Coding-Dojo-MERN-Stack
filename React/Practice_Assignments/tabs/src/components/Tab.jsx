const Tab = (props) => {
    const {arr, setContent} = props
    return (
        <div>
            {
                arr.map((item) => 
                <button onClick={(e) => setContent(item.content)}>{item.label}</button>
                )
            }
        </div>
    )
}

export default Tab