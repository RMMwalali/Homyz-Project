import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Patnan Investments";
  }, []);
  return <HomePage />;
};

export default Home;
