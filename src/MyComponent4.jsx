import React, {useState, useEffect} from 'react'

function MyComponent(){
    
    const [width, setwidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");
        
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setHeight(window.innerHeight);
        setwidth(window.innerWidth);
        console.log("Event listener added");

    }
    return(
        <>
            <p>Window Width: { width}px</p>
            <p>Window height: { height}px</p>
        </>
    )
}
export default MyComponent