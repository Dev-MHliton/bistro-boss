import SectionTitle from "../components/sectionTitle";
import FeaturedImage from "../assets/featured.jpg"
import './Featured.css';


const Featured = () => {
    return (
        <section className="featured-Item bg-fixed pt-12 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={FeaturedImage} alt="" />
                </div>

                <div className="md:ml-10">
                    <p>Dec 27, 2025</p>
                    <p className="uppercase">where i can get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nostrum alias possimus! Libero, temporibus placeat facere illum a animi aut officia totam laudantium possimus modi commodi, architecto quam adipisci cum.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>

                </div>

            </div>
        </section>
    );
};

export default Featured;