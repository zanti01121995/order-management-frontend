import { AiOutlineArrowDown } from "react-icons/ai";
import classes from "./hero.module.css";
import manEating from "../../assets/man-having-his-meal.svg";

const Hero = () => {
  return (
    <section
      style={{ height: "200vh" }}
      id="home"
      className={classes.container}
    >
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Do you crave delicious food</h2>
          <p className={classes.firstMsg}>
            But going out to take <span>food costs time....</span>
          </p>
          <p className={classes.secondMsg}>
            Why not order <span>pizza</span> or something <br />{" "}
            <span>delicious </span>
            from our restaurnt
          </p>
          <p className={classes.desc}>
            Our restaurant always puts the client above. They are our single
            most important thing for our business.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonSee}>
              {" "}
              <a href="/cart">Order now!</a>
            </button>
            <button className={classes.buttonSee}>
              <a href="#foods">
                See what is available <AiOutlineArrowDown />{" "}
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
