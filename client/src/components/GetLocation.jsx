import { useState } from "react";
import Map from "./Map";
import { useGeolocated } from "react-geolocated";

export default function GetLocation() {
  const { safe, setSafe } = useState(true);

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
      {/*<table>*/}
      {/*<tbody>*/}
      {/*<tr>*/}
      {/*<td>latitude </td>*/}
      {/*<td>{coords.latitude}</td>*/}
      {/*</tr>*/}
      {/*<tr>*/}
      {/*<td>longitude </td>*/}
      {/*<td>{coords.longitude}</td>*/}
      {/*</tr>*/}
      {/*</tbody>*/}
      {/*</table>*/}
      <Map coords={coords} />
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}
