import MovieBg from '../assets/images/img1.jpg'

const MoviesGrid = () => {
    return (
        <>
            <button className="animate__animated animate__zoomIn animate__faster relative rounded border-2 border-slate-300 hover:border-[#233C96] shadow text-left flex flex-col items-start group">
                <img src={MovieBg} alt='Peter Pan'/>
                <div className="flex flex-col text-center w-full h-full text-white text-4xl font-bold absolute hover:backdrop-blur-sm hover:bg-white/10">
                    <div className='opacity-0 group-hover:opacity-100 absolute top-1/3 w-full space-y-5'>
                        <h1>Peter Pan</h1>
                        <h1>IMDB: 8.0</h1>
                    </div>
                </div>
            </button>
        </>
    )
}

export default MoviesGrid