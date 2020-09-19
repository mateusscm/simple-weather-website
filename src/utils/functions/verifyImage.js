import d_01 from "../../assets/images/weather-icons/01d.png";
import n_01 from "../../assets/images/weather-icons/01n.png";
import d_02 from "../../assets/images/weather-icons/02d.png";
import n_02 from "../../assets/images/weather-icons/02n.png";
import _03 from "../../assets/images/weather-icons/03.png";
import _04 from "../../assets/images/weather-icons/04.png";
import _09 from "../../assets/images/weather-icons/09.png";
import n_10 from "../../assets/images/weather-icons/10n.png";
import d_10 from "../../assets/images/weather-icons/10d.png";
import n_11 from "../../assets/images/weather-icons/11n.png";
import d_11 from "../../assets/images/weather-icons/11d.png";
import _13 from "../../assets/images/weather-icons/13.png";
import _50 from "../../assets/images/weather-icons/50.png";

const verifyImage = (icon) => {
  switch (icon) {
    case "01d":
      return d_01;
    case "01n":
      return n_01;
    case "02d":
      return d_02;
    case "02n":
      return n_02;
    case "03d":
      return _03;
    case "03n":
      return _03;
    case "04d":
      return _04;
    case "04n":
      return _04;
    case "09d":
      return _09;
    case "09n":
      return _09;
    case "10d":
      return d_10;
    case "10n":
      return n_10;
    case "11d":
      return d_11;
    case "11n":
      return n_11;
    case "13n":
      return _13;
    case "13d":
      return _13;
    case "50d":
      return _50;
    case "50n":
      return _50;
    default:
      return null;
  }
};

export default verifyImage;
