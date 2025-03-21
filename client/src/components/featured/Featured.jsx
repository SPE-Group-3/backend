import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
      <div className="featuredItem">
        <img
          src="https://img.goodfon.com/wallpaper/big/d/68/alicante-alikante-valencia.webp"
          
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Alicante</h1>
          <h2>123 properties {data[0]}</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.kayak.co.uk/rimg/himg/ab/8e/ae/ice-158816748-65153508_3XL-053511.jpg?width=1366&height=768&crop=true"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Glasgow</h1>
          <h2>413 properties {data[0]}</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://wallpapercave.com/wp/wp2163830.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>mykonos</h1>
          <h2>232 properties {data[0]}</h2>
        </div>
      </div>
    </>
    )}
    </div>
  );
};

export default Featured;
