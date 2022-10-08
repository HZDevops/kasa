import Home from '../components/Home';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <div>
      <Layout children={<Home />} />
    </div>
  );
}

export default HomePage;
