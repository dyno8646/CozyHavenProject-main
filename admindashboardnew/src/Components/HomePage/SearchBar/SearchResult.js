// import { Link } from "react-router-dom";
// import "./SearchResult.css";

// export const SearchResult = ({ result }) => {
//   // Assuming result is an object containing destination name and id
//   const { id, name } = result;

//   return (
//     <Link to={`/hotels/${id}`} className="search-result">
//       {name}
//     </Link>
//   );
// };



import "./SearchResult.css";
import { useNavigate } from "react-router-dom";


const getType = (result) => {
  if (result.hasOwnProperty("destinationId")) {
    return result.destinationId;
  } else if (result.hasOwnProperty("ownerId")) {
    return result.hotelId;
  } else {
    return null;
  }
};
const getTypeFromResult = (result) => {
  if (result.hasOwnProperty("destinationId")) {
    return "destination";
  } else if (result.hasOwnProperty("ownerId")) {
    return "hotel";
  } else {
    return null;
  }
};
export const SearchResult = ({ result }) => {
  const { name } = result;
  const id = getType(result); 
  const type = getTypeFromResult(result);
  const navigate = useNavigate();

  const handleClick = () => {

    // const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    // if (!isLoggedIn) {
    //   alert("Please log in first to continue."); 
    //   return;
    // }

    if (type !== null) {
      if (type === "destination") {
        sessionStorage.setItem("destinationId", id);
        console.log(`Stored destinationId in sessionStorage: ${id}`);
        navigate(`/hotels`); 
      } else if (type === "hotel") {
        sessionStorage.setItem("hotelId", id);
        console.log(`Stored hotelId in sessionStorage: ${id}`);
      } else {
        console.error("Invalid item type:", type);
      }
    } else {
      console.error("Invalid item type:", type);
    }
  };
  // const handleClick = () => {
  //   if (id !== null) {
  //     if (result.hasOwnProperty("destinationId")) {
  //       sessionStorage.setItem("destinationId", id);
  //       console.log(`Stored destinationId in sessionStorage: ${id}`);
  //     } else if (result.hasOwnProperty("hotelId")) {
  //       sessionStorage.setItem("hotelId", id);
  //       console.log(`Stored hotelId in sessionStorage: ${id}`);
  //     } else {
  //       console.error("Invalid item ID:", id);
  //     }
  //   } else {
  //     console.error("Invalid item ID:", id);
  //   }
  // };

  // const handleClick = () => {
  //   if (id !== null) {
  //     console.log("Item ID:", id);
  //     // You can perform any further actions here using the obtained ID
  //   } else {
  //     console.error("Invalid item ID:", id);
  //   }
  // };

  return (
    <div className="search-result" onClick={handleClick}>
      {name}
    </div>
  );
};
// export const SearchResult = ({ result }) => {
//   const { id, name } = result;
//   const type = getType(result); // Obtain the type

//   const handleClick = () => {
//     const storageKey = type === "destination" ? "destinationId" : type === "hotel" ? "hotelId" : null;
//     if (storageKey) {
//       sessionStorage.setItem(storageKey, id);
//     } else {
//       console.error("Unknown item type:", type);
//     }
//   };

//   return (
//     <Link to={type === "destination" ? `/destination/${id}` : `/hotels/${id}`} className="search-result" onClick={handleClick}>
//       {name}
//     </Link>
//   );
// };