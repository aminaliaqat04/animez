import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="container-fluid p-6 text-[#5B9ED9] flex justify-center">
            <div className="hidden md:flex justify-between items-center w-[50rem]">
                <div className="flex gap-20 text-lg">
                    <NavLink
                        to="/"
                        className={"hover:text-[#233C96] hover:border-b-4 hover:border-[#233C96] hover:text-xl"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={"hover:text-[#233C96] hover:border-b-4 hover:border-[#233C96] hover:text-xl"}
                    >
                        Movies
                    </NavLink>
                </div>
                <NavLink to="/">
                    <svg width="197" height="51" viewBox="0 0 197 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_501_61)">
                        <path d="M16.4733 39.1653C19.8201 39.1653 22.5254 41.8051 22.5254 45.0513C22.5254 48.2983 19.8201 50.9224 16.4733 50.9224C13.1265 50.9224 10.4049 48.2983 10.4049 45.0513C10.4049 41.8044 13.1265 39.1653 16.4733 39.1653Z" fill="#5B9ED9"/>
                        <path d="M20.2643 19.4649C21.8653 19.4649 23.1662 20.7259 23.1662 22.2796C23.1662 23.8333 21.8653 25.0785 20.2643 25.0785C18.6632 25.0785 17.3624 23.8325 17.3624 22.2796C17.3624 20.7267 18.6625 19.4649 20.2643 19.4649Z" fill="#5B9ED9"/>
                        <path d="M8.36122 28.4223C9.86555 20.9413 16.9152 15.1754 25.5991 14.623C26.554 14.7063 26.9455 15.1709 26.9401 16.1211C26.9239 20.8595 26.8581 25.694 26.8155 29.7531C27.0415 29.7531 27.9028 29.7531 28.1728 29.7531C28.0753 29.3373 28.0815 28.8944 28.2038 28.4523L32.7121 12.1115L48.4836 5.8172C48.821 5.6821 49.187 5.60479 49.56 5.59053C49.933 5.57552 50.3021 5.6168 50.6681 5.71137C51.3986 5.90127 52.0796 6.30057 52.5245 6.86125L63.3195 20.464L60.7457 29.7846C62.9039 29.7861 66.5905 29.7846 67.7504 29.7846C68.7386 29.7846 69.5287 30.551 69.5287 31.5094V44.0531C69.5287 45.0116 68.7386 45.7779 67.7504 45.7779H64.8486C64.8764 45.5392 64.8958 45.2975 64.8958 45.0514C64.8958 41.4689 61.9134 38.5611 58.2192 38.5611C54.5249 38.5611 51.5271 41.4689 51.5271 45.0514C51.5271 45.2975 51.5464 45.5385 51.5743 45.7779H23.2134C23.2404 45.54 23.2451 45.2968 23.2451 45.0514C23.2451 41.4118 20.2109 38.4695 16.4586 38.4695C12.7063 38.4695 9.6721 41.4118 9.6721 45.0514C9.6721 45.2968 9.69222 45.5392 9.7193 45.7779H2.30987C0.854289 43.9585 -1.72294e-05 41.7503 -1.72294e-05 39.347C-1.72294e-05 33.9195 2.58767 29.4048 8.36122 28.4223ZM50.6681 29.7846V27.2424L51.5271 26.2061C51.8567 25.0134 50.7904 22.7598 49.56 22.44L44.4062 21.42C44.2522 21.3802 44.2332 21.4718 43.3546 21.42C42.2852 21.357 41.441 22.5521 41.1523 23.5961L39.4522 29.7696C43.2796 29.7726 46.5041 29.7816 50.6681 29.7846ZM13.9614 30.1021L15.6933 30.0721L13.7742 29.4213L13.9614 30.1021ZM12.7914 30.1321L11.6523 25.9867C11.5711 25.6925 11.739 25.3998 12.0423 25.3209C12.3465 25.2421 12.663 25.405 12.7442 25.6992L13.1033 27C13.3981 26.8581 13.7494 26.8093 14.086 26.9242L16.7225 27.8324C17.1164 26.3935 18.4698 25.336 20.0763 25.336C21.456 25.336 22.6392 26.1105 23.1963 27.2424L23.29 16.6961C16.6141 16.9595 9.73245 23.4325 9.60864 30.1922L12.7914 30.1321Z" fill="#5B9ED9"/>
                        <path d="M69.1696 22.4305C68.6349 22.8313 67.8688 22.736 67.4533 22.2188L51.7136 2.60923L27.9709 11.9599C27.3441 12.2061 26.6368 11.9149 26.3791 11.3092C26.1222 10.7027 26.4085 10.0122 27.0345 9.76523L34.1793 6.95057L35.6303 1.7153C35.8051 1.08256 36.4598 0.714029 37.1121 0.883659L40.825 1.83689C41.4781 2.00652 41.8573 2.65652 41.6832 3.28926L41.4649 4.09087L51.6362 0.0812921C51.832 0.00848611 52.0324 -0.0110288 52.2289 0.00548393C52.2947 0.010738 52.3496 0.0227475 52.4162 0.0362579C52.6847 0.102309 52.8998 0.274941 53.0871 0.459583L69.3879 20.7815C69.8026 21.2986 69.7044 22.0312 69.1696 22.4305Z" fill="#5B9ED9"/>
                        <path d="M58.2184 39.1653C61.5652 39.1653 64.2868 41.8051 64.2868 45.0513C64.2868 48.2983 61.5652 50.9224 58.2184 50.9224C54.8716 50.9224 52.1655 48.2983 52.1655 45.0513C52.1655 41.8044 54.8716 39.1653 58.2184 39.1653Z" fill="#5B9ED9"/>
                        <path d="M49.3504 27.4702C49.4983 26.8119 49.0679 26.1619 48.3893 26.0185L43.3795 24.9597C42.7008 24.8163 42.0307 25.2336 41.8828 25.8919C41.7349 26.5502 42.1652 27.2002 42.8439 27.3436L47.8537 28.4024C48.5324 28.5458 49.2025 28.1285 49.3504 27.4702Z" fill="#233C96"/>
                        <path d="M27.771 30.1381L32.4548 12.1078L48.7281 5.67475C49.0762 5.53666 49.4539 5.45765 49.8388 5.44308C50.2236 5.42773 50.6045 5.46993 50.9822 5.56658C51.7359 5.76066 52.4385 6.16877 52.8976 6.7418L64.0361 20.6442L61.3804 30.1703L49.7909 30.1542L50.8536 26.3347C51.1937 25.1158 50.4496 23.8631 49.18 23.5363L44.0771 22.2222C43.9182 22.1815 43.7521 22.1693 43.594 22.1601C42.4906 22.0956 41.4614 22.7784 41.1635 23.8454L39.4093 30.1549L27.771 30.1381Z" fill="#233C96"/>
                        <path d="M99.6336 25.1412L96.859 36.8995H88.2L84.5129 25.1412H84.0846L81.2728 36.8995H72.5021L75.3139 25.1412H73.6194L77.2134 10.0053H87.4365L90.4532 19.5059L92.7437 10.0053H101.552L97.9391 25.1412H99.6336ZM113.171 25.2135L110.378 36.99H100.956L103.749 25.2135H101.849L105.499 9.96924H114.903L111.291 25.2135H113.171Z" fill="#233C96"/>
                        <path d="M118.734 36.99C118.424 36.99 118.158 36.7322 118.158 36.4315V10.6995C118.158 10.3988 118.424 10.1411 118.734 10.1411H125.111C125.333 10.1411 125.554 10.2699 125.643 10.4418L132.286 26.3363L138.885 10.4418C138.974 10.2699 139.195 10.1411 139.417 10.1411H145.794C146.104 10.1411 146.37 10.3988 146.37 10.6995V36.4315C146.37 36.7322 146.104 36.99 145.794 36.99H140.613C140.303 36.99 140.037 36.7322 140.037 36.4315V22.599L134.634 35.916C134.545 36.0878 134.323 36.2167 134.146 36.2167H130.426C130.205 36.2167 129.983 36.0878 129.895 35.916L124.447 22.599V36.4315C124.447 36.7322 124.181 36.99 123.871 36.99H118.734ZM150.799 36.99V11.258C150.799 10.184 151.02 9.96924 151.375 9.96924H170.773C171.083 9.96924 171.349 10.184 171.349 10.4847V15.339C171.349 15.6397 171.083 15.8975 170.773 15.8975H157.664V20.3651H165.946C166.256 20.3651 166.522 20.6229 166.522 20.9236V25.7349C166.522 26.0356 166.256 26.2934 165.946 26.2934H157.664V30.8899H170.729C171.039 30.8899 171.305 31.1476 171.305 31.4483V36.2597C171.305 36.5604 171.039 36.8181 170.729 36.8181H151.375C151.02 36.8181 150.799 36.5604 150.799 36.99ZM176.354 36.99C176.044 36.99 175.778 36.7322 175.778 36.4315V32.5223C175.778 32.3934 175.822 32.2646 175.911 32.1357L187.559 16.1123H176.841C176.531 16.1123 176.265 15.8545 176.265 15.5538V10.6995C176.265 10.3988 176.531 10.1411 176.841 10.1411H196.063C196.373 10.1411 196.638 10.3988 196.638 10.6995V14.6087C196.638 14.6946 196.594 14.8235 196.505 14.9524L184.946 31.0188H196.284C196.461 31.0188 196.594 31.1047 196.683 31.1906C196.815 31.2765 196.86 31.4483 196.86 31.5772L196.815 36.4315C196.815 36.7322 196.594 36.99 196.24 36.99H176.354Z" fill="#233C96"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_501_61">
                        <rect width="197" height="51" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </NavLink>
                <div className="flex gap-20 text-lg justify-end">
                    <NavLink
                        to="/about"
                        className={"hover:text-[#233C96] hover:border-b-4 hover:border-[#233C96] hover:text-xl"}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={"hover:text-[#233C96] hover:border-b-4 hover:border-[#233C96] hover:text-xl"}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar