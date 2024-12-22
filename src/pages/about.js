import Footer from "./common/footer";
import Header from "./common/header";
function About() {
    return (
        <>
            <Header />
            <section>
                <div className='container mx-auto'>
                    <div className="mt-3 flex items-center justify-center">
                        <div className=" rounded-lg">
                            <h1 className="text-3xl font-bold mb-4">About Us</h1>
                            <p className="text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                vehicula lorem sit amet dapibus venenatis. Suspendisse sit amet
                                maximus augue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default About;