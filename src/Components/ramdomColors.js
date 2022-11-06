import React,{useState} from 'react'
import { FaRegBell } from 'react-icons/fa'

function RamdomColors() {

const [color, setColor] = useState({
    r:0,
    g:0,
    b:0
})

const [stop, setStop] = useState(false)

    const style= {
        width:"255px",
        height:"255px",
        backgroundColor: `rgb(${color.r},${color.g},${color.b})`
    }

    const paintColor = (e) => {

      const  r = e.pageX - e.target.offsetLeft;
      const  g = e.pageY - e.target.offsetTop;
      const  b = Math.sqrt(r+g)

       
       setColor(!stop&&{
        r:r,
        g:g,
        b:b
       })
    }

    const paintBlack = () => {
        setColor(!stop&&{
            r:0,
            g:0,
            b:0
        })
            }

     const keepColor = () => {
        console.log(color)
        setStop(!stop)
    }
          


  return (
    <div style={style}
        onMouseMove={paintColor}
        onMouseOut ={paintBlack}
        onDoubleClick ={keepColor}>
    
    </div>
  )
}

export default RamdomColors