export const Terms = () => {
    return (
        <section className="flex flex-col w-screen gap-4">
            <div
                className="relative w-full flex flex-col items-start justify-center before:bottom-0
                gap-2 px-4 py-2 before:absolute before:w-full before:h-p[.2em] before:bg-blue before:left-0"
                >
                <h1 className="text-blue capitalize font-bold text-2xl">
                    Terms and Conditions
                </h1>
                <span className="">Last updated by September 2022</span>
            </div>
        </section>
    );
};

export default Terms;
