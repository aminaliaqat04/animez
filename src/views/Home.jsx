import { Player, Controls } from '@lottiefiles/react-lottie-player';
import BannerImage from '../assets/images/banner.png'

const Home = () => {
    return (
        <div className="px-10 pt-10 pb-32" style={{background: `url(${BannerImage})  0% 30% / cover no-repeat`}}>
            <div className='flex justify-between container mx-auto'>
                <div className='space-y-10 pl-10 pb-5 flex flex-col justify-center text-center animate-pulse'>
                    <h2 className="text-4xl text-white">Where the </h2>
                    <h2 className="text-4xl text-white"><span className="text-6xl font-bold font-fantasy animate-bounce">Adventure</span> Never Ends</h2>
                    <h3 className="text-4xl text-white">and the <span className="text-6xl font-bold font-fantasy">Fun</span> is <span className="text-6xl font-bold font-fantasy text-white animate-pulse">Non-Stop!</span></h3>
                </div>
                <div>
                    {<Player
                        autoplay
                        loop
                        src="https://lottie.host/a098b56e-a519-48e6-a8b5-4f68223169cd/QA4P95bhhS.json"
                        style={{ height: '30rem', width: '30rem' }}
                        >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>}
                </div>
            </div>
        </div>
    )

}

export default Home