import { useEffect, useState } from "react"


// this hook get the current screen width, use this with useEffect for responsive

const UseMedia = () => {
    const { innerWidth, innerHeight } =window
    const [screenWidth, setScreenWidth] = useState(innerWidth)
    const [screenHeight, setScreenHeight] = useState(innerHeight)

    useEffect(() => {
        const setScreenSize = () => {
          setScreenWidth(window.innerWidth)
          setScreenHeight(window.innerHeight)
        }
        window.addEventListener('resize', setScreenSize)
    },[])
      
    return {
        width: screenWidth,
        height: screenHeight
    }

}
 
export default UseMedia


// example of using:
/*
    const screenWidth = useMedia()

    useEffect(() => {
        ...
    }, [screenWidth])

*/