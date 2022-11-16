const Hero = ({ children, className = "", backgroundImage }) => {
    return <section className={`${className} relative h-[clamp(30em,calc(100vw/2),90vh)] items-center justify-center flex flex-col
    text-white bg-center bg-cover bg-no-repeat gap-8 before:mix-blend-multiply before:z-0 
    before:w-full before:h-full before:absolute before:bg-blue before:opacity-60`} style={{ backgroundImage:`url(${backgroundImage})` }}>
        {children}
    </section>;
};

export default Hero;
