import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Banner from "../assets/images/movies-bg-1.png"
import MoviesGrid from "../components/MoviesGrid"

const Movies = () => {
    return (
        <>
            <div className="flex bg-cover bg-no-repeat bg-[50%_0%]" style={{backgroundImage: `url(${Banner})`}}>
                <div className="container mx-auto flex justify-center">
                    <div className="w-3/4 lg:w-1/2 py-28 lg:py-32 font-fantasy space-y-2 lg:space-y-5 relative">

                        <div className='md:absolute md:right-0 md:left-auto relative left-0 flex pb-10 md:top-20 lg:top-auto'>
                            {<Player
                                autoplay
                                loop
                                src="https://lottie.host/7e960b56-4924-4b85-bff1-2b4e92976a76/qNtdtkkFEA.json"
                                className={"h-32 lg:h-32 w-32 lg:w-32"}
                                >
                                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>}
                        </div>
                        <h1 className="text-[#233C96] text-2xl lg:text-4xl font-bold uppercase">Lights, Camera,</h1>
                        <h1 className="text-[#233C96] text-2xl lg:text-4xl font-bold uppercase">Animation Action!</h1>

                        <p className="text-[#5B9ED9] text-base lg:text-xl leading-8 lg:leading-10">Discover a treasure trove of animated movies that are tailor-made for you. From daring escapades to heartwarming tales, our selection will keep you glued to the screen!</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-20 font-fantasy">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <MoviesGrid />
                </div>
            </div>
            
        </>
    )

}

export default Movies