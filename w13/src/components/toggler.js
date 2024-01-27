import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useWindowResize from "../hooks/useWindowResize";

function Toggler() {
    const [isLight, toggle] = useLocalStorage('light', true);
    const { width } = useWindowResize();

    useEffect(() => {
        function setTheme() {
            const allElements = document.querySelectorAll('*');
        
            allElements.forEach(element => {
                if (width > 768) { 
                    element.className = isLight ? 'light' : 'dark';
                    document.querySelectorAll("button")[0].style.display="block";
                } else {
                    element.className = 'light'; 
                    document.querySelectorAll("button")[0].style.display="none";
                }
            });
        }

        setTheme();
        return () => {}; 
    }, [isLight, width]);

    return (
        <>
            <button onClick={() => toggle((prevState) => !prevState)}> Toggle {isLight ? "dark" : "light"} theme</button>
        </>
    );
}

export default Toggler;
