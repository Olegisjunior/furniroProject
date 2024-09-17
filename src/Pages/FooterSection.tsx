import { Link } from "react-router-dom";

export const FooterSection = () => {
  return (
    <>
      <hr className="w-[full] h-[2px] bg-[#3a3a3a] mb-[40px]" />
      <footer className="h-[320px] container mx-auto flex justify-around ">
        <div className="block1 flex flex-col gap-y-[100px]">
          <span className="text-[24px] font-bold">Furniro.</span>
          <p>
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className="block2 flex flex-col gap-y-[40px]">
          <span className="text-[24px] font-bold">Links</span>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="block3 flex flex-col gap-y-[40px]">
          <span className="text-[24px] font-bold">Help</span>
          <p>Payment Options</p>
          <p>Returns</p>
          <p>Privacy Policies</p>
        </div>
      </footer>
    </>
  );
};
