import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './CoffeeCard/CoffeeCard'

function App() {

  const coffees = useLoaderData()

  return (
    <>

      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 container mx-auto '>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
