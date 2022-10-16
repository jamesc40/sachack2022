import Map from "./Map";
import { useGeolocated } from "react-geolocated";

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
    <div>Getting the location data&hellip; </div>
  );
}
