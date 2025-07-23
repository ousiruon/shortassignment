// User type definition for TypeScript
export interface User {
  id: number | string; // Should be normally just a number, but I added string so that I can use uiid to generate unique ids when a new user is added.
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
