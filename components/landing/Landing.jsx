import Button from "../ui/button/Button";

const Landing = () => {
  return (
    <section>
      <div className="container flex flex-col sm:flex-row mx-auto px-5 items-center min-h-[calc(100vh_-_93px)] sm:gap-[35px] mb-[3rem]">
        <article className="w-[50%] text-center sm:text-left pt-5 md:ty-0">
          <div>
            <img
              src="/assets/icons/home/landing-logo.svg"
              alt="landing-logo"
              className="w-[415.43px] h-[100px] sm:h-[135.72px]"
            />
            <p
              style={{ fontFamily: "Sofia Pro" }}
              className="text-[20px] text-[#3B2222] text-center sm:w-[100%] xl:w-[80%]"
            >
              Earn points and redeem rewards. Order ahead and pay. Get it
              delivered or skip the line inside!
            </p>
            <Button
              type="button"
              name="Learn more"
              className="sm:block sm:mx-auto xl:mx-0 h-[53px]"
            />
          </div>
        </article>
        <article className="md:w-[50%] sm:text-left  pb-5 sm:pb-0 relative z-10">
          <img
            src="/assets/images/home/landing/iced_latte.png"
            alt="iced latte"
            className="absolute bottom-0 left-[-50px] sm:bottom-[-30px] sm:left-[-30px] md:bottom-[-20px] md:left-[-20px] lg:bottom-[-40px] lg:left-[-20px] xl:bottom-[-30px] xl:left-[20px] z-10 w-[5rem] md:w-[6rem] lg:w-[7.5rem]  xl:w-[8rem]"
          />
          <img
            src="/assets/images/home/landing/mobile.png"
            alt="mobile"
            className="absolute bottom-[-30px] left-[-10px] sm:bottom-[-40px] sm:left-[10px] md:bottom-[-40px] md:left-[30px] lg:bottom-[-65px] lg:left-[3.5rem] xl:bottom-[-40px] xl:left-[100px] z-20 w-[4rem] md:w-[5rem] lg:w-[6rem] xl:w-[6rem] "
          />
          <div className="">
            <div
              className="video-container w-[230px] h-[230px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] mx-auto"
              style={{
                position: "relative",
                zIndex: -1,
                overflow: "hidden",
                borderRadius: "50% 49% 10% 10% / 38% 40% 0% 0%",
              }}
            >
              <video
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              >
                <source
                  src="/assets/videos/landing/coffe.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Landing;
