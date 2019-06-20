// Interface imports
import Geo from "./geo";
import Company from "./company";

export default interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
