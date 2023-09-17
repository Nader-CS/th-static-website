import Card from "../ui/card/Card";
import classes from "./Download.module.css";

const Download = () => {
  return (
    <section className="bg-white py-[10rem] px-3 text-[#F8F5EF]">
      <article className="container mx-auto text-center lg:text-left ">
        <Card className="bg-[#3B2222] p-3 md:flex md:flex-wrap lg:py-[6rem]">
          <div className="hidden md:block md:basis-[50%] relative">
            <div className="absolute left-[20%] top-[-8rem] xl:top-[-12rem] w-[70%] lg:w-[50%]">
              <img
                src="./assets/images/home/how-it-works/how-it-works.png"
                className="w-full"
              />
            </div>
          </div>
          <div className="md:basis-[50%]">
            <div className="my-4">
              <p className={`${classes.text} text-xl lg:text-4xl `}>
                With every transaction
              </p>
              <p className={`${classes["text-bold"]} text-2xl lg:text-4xl `}>
                you earn Tims Points
              </p>
            </div>
            <div>
              <p className={`${classes.text} text-sm`}>
                Get the Tims app to earn, redeem, and enjoy your favorite Tims
                treats!
              </p>
            </div>
            <div className="md:flex md:justify-center lg:justify-start">
              <div>
                <img
                  src="./assets/images/home/download/app_store.png"
                  className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
                />
              </div>
              <div>
                <img
                  src="./assets/images/home/download/google_play.png"
                  className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
                />
              </div>
            </div>
          </div>
        </Card>
      </article>
    </section>
  );
};

export default Download;
