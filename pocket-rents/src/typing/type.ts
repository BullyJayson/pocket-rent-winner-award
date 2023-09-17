export interface Destination {
  id: number;
  url: string;
  name: string;
  date: string;
  location: string;
}

export interface RentingLists {
  id: number;
  imageurl: string;
  des: string;
  type: string;
}

export interface HostReview {
  id: number;
  name: string;
  imageurl: string;
  date: string;
  context: string;
  imgAcco: string;
  nameAcco: string;
}

export interface GuestInfo {
  Name: string;
  University: string;
  Work: string;
  ObessedWith: string;
  SpendTime: string;
  Language: string;
  Live: string;
  Pets: string;
}

export interface category {
  id: number;
  title: string;
}

export interface accomodation {
  id: number;
  location: string;
  distant: string;
  duration: string;
  days: number;
  price: string;
  rating: string;
  category: string;
  img: string;
}

export interface Logo {
  src: string;
}

export interface ChooseHowToPay {
  id: string;
  p1: string;
  p2: string;
}

export interface YourTrip {
  p1: string;
  p2: string;
  p3: string;
}

export interface Methods {
  id: string;
  label: string;
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface PriceDetails {
  p1: string;
  p2: string;
}

export interface Input {
  card: string;
  expire: string;
  cvv: string;
  street: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
