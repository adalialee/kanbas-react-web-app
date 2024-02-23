function TernaryOperator() {
    let LoggedIn = true;
    return(
        <div>
            <h2>Logged In</h2>
            { LoggedIn ? <p>Welcome</p> : <>Please login</> }
        </div>
    )
}

export default TernaryOperator