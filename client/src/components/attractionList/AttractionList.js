import useFetch from '../../hooks/useFetch';
import './attractionlist.css';

const AttractionList = () => {
  const { data, loading, error } = useFetch('/attractions/countByType');

  const images = [
    'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/131808264.jpg?k=5e8add287b1f774409356cf005abb26f6b5bd555bdb80b7890e9a6329775c3d1&o=',
    'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/144609325.jpg?k=77abdd8634235a486649bb910edd0b0e8992c594c0584ef026f68d6ebaa81b4a&o=',
    'https://q-xx.bstatic.com/xdata/images/xphoto/max1200/115809324.jpg?k=086a91d84f93f39333cd9aaff812115fe51446a8ca7d1ebb14e25e6a0f31584a&o=',
    'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/131471097.jpg?k=b9f426ec7c83797822acbe369e04af72760798d9b2953d8e5eb52032795d0d2c&o=',
    'https://r-xx.bstatic.com/xdata/images/xphoto/max1200/184253291.jpg?k=1bb4afb4231fc6294c111b9109da82083062c625ca814b72c3efdd46396f3186&o=',
  ];
  return (
    <div className="aList">
      {loading ? (
        'Loading'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="aListItem" key={i}>
                <img src={img} 
                alt="" 
                className="aListImg" 
                />
                <div className="aListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count}
                    {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default AttractionList;
