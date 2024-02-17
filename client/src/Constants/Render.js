
import Landing from "../Pages/Landing";
import Companies from "../Pages/Companies";
import AboutUs from "../Pages/AboutUs";
import Jobs from '../Pages/Jobs'

const renderPageComponent = (page) => {
    switch (page) {
      case "landing":
        return <Landing />;
      case "companies":
        return <Companies />;
      case "about":
        return <AboutUs />;
    case "jobs":
        return <Jobs/>
      default:
        return null; // Render nothing if page state is null or invalid
    }
  };

  export default renderPageComponent;