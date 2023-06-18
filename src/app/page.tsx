import Coffee from "@/components/Coffee";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

import CoffeImage from '../assets/png/Coffee.png'
import CoffeImage1 from '../assets/png/Coffee1.png'
import CoffeImage2 from '../assets/png/Coffee2.png'
import CoffeImage3 from '../assets/png/Coffee3.png'
import CoffeImage4 from '../assets/png/Coffee4.png'
import CoffeImage5 from '../assets/png/Coffee5.png'
import CoffeImage6 from '../assets/png/Coffee6.png'
import CoffeImage7 from '../assets/png/Coffee7.png'
import CoffeImage8 from '../assets/png/Coffee8.png'
import CoffeImage9 from '../assets/png/Coffee9.png'
import CoffeImage10 from '../assets/png/Coffee10.png'
import CoffeImage11 from '../assets/png/Coffee11.png'


export default function Home() {
  const customStyle = {
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '12px',
    paddingRight: '12px'
  };
  return (
    <div>
      <Header />
      <Intro />
      <div className="mx-40 mb-10 flex flex-col gap-14">
        <h1 className="text-5xl font-extrabold font-baloo text-baseTitle">Our coffee</h1>
        <div className="flex gap-24 flex-wrap">
          <Coffee
            image={CoffeImage}
            name={'Express traditional'}
            content={'Traditional coffee made with hot water and ground beans'}
            props1={'Traditional'}
            props2={''}
            props3={''}
          />
          <Coffee
            image={CoffeImage1}
            name={'American Express'}
            content={'Diluted express, less intense than the traditional one'}
            props1={'Traditional'}
            props2={''}
            props3={''}
          />
          <Coffee
            image={CoffeImage2}
            name={'creamy express'}
            content={'Traditional express with creamy foam'}
            props1={'Traditional'}
            props2={''}
            props3={''}
          />
          <Coffee
            image={CoffeImage3}
            name={'Iced Express'}
            content={'Drink prepared with express coffee and ice cubes'}
            props1={'Traditional'}
            props2={'Iced'}
            props3={''}
            isActive={true}
          />
          <Coffee
            image={CoffeImage4}
            name={'Coffee with milk'}
            content={'Half and half traditional express with steamed milk'}
            props1={'Traditional'}
            props2={'With milk'}
            props3={''}
            isActive={true}
          />
          <Coffee
            image={CoffeImage5}
            name={'Latte'}
            content={'A shot of express with twice as much milk and creamy foam'}
            props1={'Traditional'}
            props2={'With milk'}
            props3={''}
            isActive={true}
          />
          <Coffee
            image={CoffeImage6}
            name={'Capuccino'}
            content={'Cinnamon drink made from equal doses of coffee, milk and foam'}
            props1={'Traditional'}
            props2={'With milk'}
            props3={''}
            isActive={true}
          />
          <Coffee
            image={CoffeImage7}
            name={'Macchiato'}
            content={'Express coffee mixed with a little hot milk and foam'}
            props1={'Traditional'}
            props2={'with milk'}
            props3={''}
            isActive={true}
          />
          <Coffee
            image={CoffeImage8}
            name={'Mocaccino'}
            content={'Express coffee mixed with a little hot milk and foam'}
            props1={'Traditional'}
            props2={'with milk'}
            props3={''}
            isActive={true}
          />
          <Coffee
            image={CoffeImage9}
            name={'Macchiato'}
            content={'Express coffee mixed with a little hot milk and foam'}
            props1={'Traditional'}
            props2={'with milk'}
            props3={''}
            isActive={true}
          />
          <Coffee
            image={CoffeImage10}
            name={'Cubano'}
            content={'Express coffee mixed with a little hot milk and foam'}
            props1={'Traditional'}
            props2={'with milk'}
            props3={''}
            isActive={true}
          />
          <Coffee
            image={CoffeImage11}
            name={'Macchiato'}
            content={'Express coffee mixed with a little hot milk and foam'}
            props1={'Traditional'}
            props2={'with milk'}
            props3={''}
            isActive={true}
          />
          
        </div>

      </div>
    </div>
  )
}
