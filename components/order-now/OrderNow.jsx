import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/button/Button";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const OrderNow = () => {
  return (
    <section className="bg-[#F8F5EF] w-full fixed bottom-0 z-10">
      <div className="  flex justify-center lg:justify-start container mx-auto gap-[30px] ">
        <div className="hidden lg:flex items-center gap-[30px]">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="block w-24 text-[1.5rem]"
          />
          <span style={{ fontFamily: "sofia pro" }}>
            Start ordering now and get your fresh delicious orders in 30 mins
          </span>
        </div>
        <div className="lg:grow lg:flex lg:justify-end lg:px-[5rem]">
          <Button
            type="button"
            name="Start Now"
            className="h-[53px] lg:h-[40px] mb-[1rem]"
            style={{ fontFamily: "sofia pro" }}
          />
        </div>
      </div>
    </section>
  );
};

export default OrderNow;
