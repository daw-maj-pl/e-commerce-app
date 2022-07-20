const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {['Product1', 'Product2'].map(product => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
