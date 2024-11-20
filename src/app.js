const App = () =>{
    const arr = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="App">
            <h1>HELLO DIO !</h1>
            <h2>Me chama de hugo</h2>
            <h1> fala meu saco</h1>
            <h3>Qume correr é gay</h3>
            {arr.map(item => (
                <p>
                    {item} * 5 = {item * 5}
                </p>)
            )}
        </div>
    );
};

export default App;