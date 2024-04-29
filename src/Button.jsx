function Button(){

    /**
     * const handleClick2 = (name) => {
        if(count < 3 ){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} "stop clicking me"`);
        }
    };*/

    const handleClick = (e) => console.log(e);
    return (<button onDoubleClick={(e) => handleClick(e)}>Click Me 😂</button>)
}

export default Button