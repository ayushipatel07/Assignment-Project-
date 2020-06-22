import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let customers = [
        {
            "id": 1,
            "firstName": "Ted",
            "lastName": "james",
            "gender": "male",
            "address": "1234 Anywhere St.",
            "city": " Phoenix ",
            "state": {
                "abbreviation": "AZ",
                "name": "Arizona"
            },
            "orders": [
                {"productName": "Basketball", "itemCost": 7.99},
                {"productName": "Shoes", "itemCost": 199.99}
            ],
            "latitude": 33.299,
            "longitude": -111.963
      },
      {
            "id": 2,
            "firstName": "Michelle",
            "lastName": "Thompson",
            "gender": "female",
            "address": "345 Cedar Point Ave.",
            "city": "Encinitas ",
            "state": {
                "abbreviation": "CA",
                "name": "California"
            },
            "orders": [
                {"productName": "Frisbee", "itemCost": 2.99},
                {"productName": "Hat", "itemCost": 5.99}
            ],
            "latitude": 33.037,
            "longitude": -117.291
      },
      {
            "id": 3,
            "firstName": "Zed",
            "lastName": "Bishop",
            "gender": "male",
            "address": "1822 Long Bay Dr.",
            "city": " Seattle ",
            "state": {
                "abbreviation": "WA",
                "name": "Washington"
            },
            "orders": [
                {"productName": "Boomerang", "itemCost": 29.99},
                {"productName": "Helmet", "itemCost": 19.99},
                {"productName": "Kangaroo Saddle", "itemCost": 179.99}
            ],
            "latitude": 47.596,
            "longitude": -122.331
      },
      {
            "id": 4,
            "firstName": "Tina",
            "lastName": "Adams",
            "gender": "female",
            "address": "79455 Pinetop Way",
            "city": "Chandler",
            "state": {
                "abbreviation": "AZ",
                "name": " Arizona "
            },
            "orders": [
                {"productName": "Budgie Smugglers", "itemCost": 19.99},
                {"productName": "Swimming Cap", "itemCost": 5.49}
            ],
            "latitude": 33.299,
            "longitude": -111.963
      },
    ]
    return {customers}
}
}