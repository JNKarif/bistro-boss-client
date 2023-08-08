import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
  return (
    <section className="featured-bg bg-fixed py-12 mb-12">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>

      <div className="md:flex mb-8 items-center  md:py-20 md:px-36 text-white  bg-neutral-500 bg-opacity-50 ">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="p-8">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            repudiandae, quae magni saepe voluptate dicta beatae ipsum impedit
            non quidem, ipsam aliquam expedita, illo voluptates similique illum
            quam! Molestias.
          </p>
          <button className="btn btn-outline border-0 border-b-2 mt-4 text-white"><span className="">Taste Now</span></button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
