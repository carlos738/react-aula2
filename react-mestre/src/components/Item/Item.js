const Item = ({children}) => {
    return (
        //eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
        {children}
    </a>
    )
}

export default Item;