import { useEffect, useState } from "react"


// this hook get the current screen width, use this with useEffect for responsive

const UseMedia = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const setScreenSize = () => {
          setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', setScreenSize)
    },[])
      
    return screenWidth

}
 
export default UseMedia


// example of using:
/*
    const screenWidth = useMedia()

    useEffect(() => {
        ...
    }, [screenWidth])

*/