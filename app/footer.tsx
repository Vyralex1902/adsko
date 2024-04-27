const Footer = () => {
    return(
    <div className="opacity-95 backdrop-blur fixed flex bottom-0 flex-row bg-gray-800 w-screen justify-center" id="footer-to-hide">
              {/* <FooterIcon icon={<AiOutlineInstagram />}></FooterIcon> */}
        <p className="font-thin text-xl">
        <a className="mx-1 underline text-cyan-500" target="_blank" href="https://www.instagram.com/dqrkluca" rel="noreferrer">Instagram</a>
        <label className="text-gray-500">|</label>
        <a className="mx-1 underline text-cyan-500" target="_blank" href="https://www.youtube.com/@Fireship" rel="noreferrer">YouTube</a>
    </p>
    {/* <FooterIcon icon={<FaYoutube />}></FooterIcon> */}
    </div>
    );
};

export default Footer;