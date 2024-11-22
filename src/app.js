const App = () =>{
    const arr = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="App">
            <h1>HELLO DIO !</h1>
            <h2>Me chama de hugo</h2>
            <h1> Depois que atingirmos a meta dobraremos a meta</h1>
            <h3>Quem correr é </h3>
            {arr.map(item => (
                <p>
                    {item} * 5 = {item * 5}
                </p>)
            )}
        </div>
    );
};

export default App;