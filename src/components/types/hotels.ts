export type HotelBasicInfo = {
  access: string;
  address1: string;
  address2: string;
  dpPlanListUrl: string;
  faxNo: string;
  hotelImageUrl: string;
  hotelInformationUrl: string;
  hotelKanaName: null | string;
  hotelMapImageUrl: string;
  hotelMinCharge: number;
  hotelName: string;
  hotelNo: number;
  hotelSpecial: string;
  hotelThumbnailUrl: string;
  latitude: number;
  longitude: number;
  nearestStation: string;
  parkingInformation: string;
  planListUrl: string;
  postalCode: string;
  reviewAverage: null | number;
  reviewCount: number;
  reviewUrl: string;
  roomImageUrl: null | string;
  roomThumbnailUrl: null | string;
  telephoneNo: string;
  userReview: null | string;
};

export type HotelRatingInfo = {
  bathAverage: number | null;
  equipmentAverage: number | null;
  locationAverage: number | null;
  mealAverage: number | null;
  roomAverage: number | null;
  serviceAverage: number | null;
};

export type Hotel = [
  { hotelBasicInfo: HotelBasicInfo; hotelRatingInfo: HotelRatingInfo }
];
export type Hotels = Array<Hotel>;
