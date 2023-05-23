import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch('/attractions/countByCity?cities=Sigiriya,Kandy,Galle');

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/max1200/134466472.jpg?k=fc3f74303efe5f57638a5217850b933f3014e8c21a5c5fa01c1b937defd5cda6&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Sigiriya</h1>
              <h3>{data[0]} things to do</h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134507150.jpg?k=51c217d2dfdd37ec2b7198582fa5683b8fd571c804133abbcd113eb524505b55&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Kandy</h1>
              <h3>{data[1]} things to do</h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/131511292.jpg?k=be7319dac06267ef647bd4e5d87fdf1c62a3ea2311a8b811d1d32904cb1103a3&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Galle</h1>
              <h3>{data[2]} things to do</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
