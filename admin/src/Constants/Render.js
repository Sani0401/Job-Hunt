import AddJob from '../Pages/AddJob'
import AddCompanies from '../Pages/AddCompanies'
import Users from '../Pages/Users'
import Companies from '../Pages/Companies'
import Jobs from '../Pages/Jobs'

const renderPageComponent = (page) => {
    switch (page) {
      case "Add Job":
        return <AddJob />;
      case "Add Companies":
        return <AddCompanies />;
      case "Users":
        return <Users />;
    case "Companies":
        return <Companies/>
    case "Jobs":
        return <Jobs/>
      default:
        return null; // Render nothing if page state is null or invalid
    }
  };

  export default renderPageComponent;