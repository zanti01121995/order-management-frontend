import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./foodCatalog.module.css";
import { useEffect } from "react";

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndpoint = location.pathname.split("/")[2];
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async () => {
      const res = await fetch(
        `https://order-management-7etp.onrender.com/product?category=${foodEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setFilteredFoods(data);
    };
    fetchFoodType();
  }, [foodEndpoint]);

  return (
    <div id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        {filteredFoods?.length !== 0 && (
          <h2 className={classes.title}>
            The best {foodEndpoint} in the region
          </h2>
        )}
        <div className={classes.foods}>
          {filteredFoods.length !== 0 ? (
            filteredFoods.map((f) => (
              <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
                <div className={classes.imgContainer}>
                  <img
                    src={`https://order-management-7etp.onrender.com/images/${f?.image}`}
                    className={classes.foodImg}
                  />
                </div>
                <div className={classes.foodDetails}>
                  <h4 className={classes.foodTitle}>{f?.title}</h4>
                  <span className={classes.price}>
                    <span>₹</span> {f?.price}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <h1 className={classes.noQuantity}>No {foodEndpoint} right now</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCatalog;
