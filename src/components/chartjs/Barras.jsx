import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function Barras() {
  const ref = useRef()

  useEffect(() => {
    new Chart(
      ref.current,
      {
        type: "bar",
        data: {
          labels: ["caracol", "mariposas", "hormigas"],
          datasets: [{
            label: "Gusanos",
            data: [4, 10, 6],
            backgroundColor: ['#156e67', '#0a3834', '#050a0a']
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Gráfica de Barras",
              font:{
                size: 30
              }
            }
          }
        }
      }
    )
  }, [])
  
  return (
    <>
      <canvas ref={ref} className='mt-4'></canvas>
    </>
  )
}
