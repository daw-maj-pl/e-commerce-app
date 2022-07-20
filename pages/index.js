import { client } from '../lib/client';

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

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  };
};

export default Home;
