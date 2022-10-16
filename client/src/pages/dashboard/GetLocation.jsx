import Map from "./Map";
import { useGeolocated } from "react-geolocated";
import "./dashboard.css"
export default function GetLocation() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <Map coords={coords} />
    </>
  ) : (
    <div className="location">Getting the location data&hellip; </div>
  );
}
