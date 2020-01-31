/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const mongoose = require('mongoose');
const db = require('./');
const model = require('./model.js');

const adjectives = [
  'Ancient',
  'Beautiful',
  'Bustling',
  'Charming',
  'Exciting',
  'Contemporary',
  'Cosmopolitan',
  'Famous',
  'Fantastic',
  'Fascinating',
  'Picturesque',
  'Romantic',
  'Wonderful',
  'Extraordinary',
];

const nouns = [
  'Treasures',
  'Wonders',
  'Excursion',
  'Expedition',
  'Getaway',
  'Tour',
  'Journey',
  'Voyage',
  'Vacation',
];

const prepositions = [
  'of',
  'in',
];

const cities = [
  'London, United Kingdom',
  'Paris, France',
  'New York, United States',
  'Tokyo, Japan',
  'Barcelona, Spain',
  'Moscow, Russia',
  'Chicago, United States',
  'Singapore, Singapore',
  'Dubai, United Arab Emirates',
  'San Francisco, United States',
  'Madrid, Spain',
  'Amsterdam, Netherlands',
  'Los Angeles, United States',
  'Rome, Italy',
  'Boston, United States',
  'San Jose, United States',
  'Toronto, Canada',
  'Washington DC, United States',
  'Zurich, Switzerland',
  'Hong Kong, Hong Kong',
  'Beijing, China',
  'Berlin, Germany',
  'Sydney, Australia',
  'Las Vegas, United States',
  'Frankfurt, Germany',
  'Miami, United States',
  'San Diego, United States',
  'Seoul, South Korea',
  'Prague, Czech Republic',
  'Munich, Germany',
  'Houston, United States',
  'Milan, Italy',
  'Dublin, Ireland',
  'Seattle, United States',
  'Dallas, United States',
  'Istanbul, Turkey',
  'Vancouver, Canada',
  'Melbourne, Australia',
  'Abu Dhabi, United Arab Emirates',
  'Vienna, Austria',
  'Calgary, Canada',
  'Brussels, Belgium',
  'Denver, United States',
  'Doha, Qatar',
  'Oslo, Norway',
  'Orlando, United States',
  'Austin, United States',
  'Stockholm, Sweden',
  'Montreal, Canada',
  'Philadelphia, United States',
  'Brisbane, Australia',
  'Atlanta, United States',
  'Copenhagen, Denmark',
  'Saint Petersburg, Russia',
  'Perth, Australia',
  'Minneapolis, United States',
  'Lisbon, Portugal',
  'Venice, Italy',
  'Portland, United States',
  'Hamburg, Germany',
  'Tel Aviv, Israel',
  'Lyon, France',
  'Florence, Italy',
  'Stuttgart, Germany',
  'Luxembourg, Luxembourg',
  'Edmonton, Canada',
  'Osaka, Japan',
  'Auckland, New Zealand',
  'Ottawa, Canada',
  'Budapest, Hungary',
  'Helsinki, Finland',
  'Athens, Greece',
  'Cologne, Germany',
  'Bangkok, Thailand',
  'Charlotte, United States',
  'Phoenix, United States',
  'New Orleans, United States',
  'Baltimore, United States',
  'Valencia, Spain',
  'Manchester, United Kingdom',
  'Nashville, United States',
  'Salt Lake City, United States',
  'Dusseldorf, Germany',
  'Sao Paulo, Brazil',
  'Rio de Janeiro, Brazil',
  'Raleigh, United States',
  'Warsaw, Poland',
  'Marseille, France',
  'San Antonio, United States',
  'Birmingham, United Kingdom',
  'Columbus, United States',
  'Shanghai, China',
  'St. Louis, United States',
  'Detroit, United States',
  'Sacramento, United States',
  'Milwaukee, United States',
  'Kansas City, United States',
  'Tampa, United States',
  'Nuremberg, Germany',
  'Bristol, United Kingdom',
];

const codeOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const codes = [];
const titles = [];
const trips = [];
const split = cities.map((city) => city.split(', '));

// creates an array of departure dates with random length of days in between > length of the trip
const createDates = (tripLength) => {
  const dates = [];
  const firstDate = Math.floor(Math.random() * (12 - 1)) + 1;
  let incrementer = 0;

  for (let i = 0; i < 10; i++) {
    let date = new Date(2020, 0, firstDate + incrementer);
    dates.push(date);
    incrementer += Math.floor(Math.random() * (15 - tripLength + 1)) + tripLength + 1;
  }
  return dates;
};

for (let i = 0; i < 100; i++) {
  // creates codes array
  let code = '';
  code += `${codeOptions[Math.floor(Math.random() * 26)]}${codeOptions[Math.floor(Math.random() * 26)]}${codeOptions[Math.floor(Math.random() * 26)]}${codeOptions[Math.floor(Math.random() * 26)]}`;
  codes.push(code);

  // creates titles array
  let title = '';
  title += `${adjectives[Math.floor(Math.random() * 14)]} ${
    nouns[Math.floor(Math.random() * 9)]} ${
    prepositions[Math.floor(Math.random() * 2)]} ${
    split[i][0]}`;
  titles.push(title);

  // creates trips array
  let days = Math.floor(Math.random() * (15 - 5)) + 5;
  const obj = {};
  obj.id = i + 1;
  obj.code = codes[i];
  obj.title = titles[i];
  obj.city = cities[i];
  obj.msrp = ((Math.random() * (2500 - 1500)) + 1500).toFixed(2);
  obj.price = (obj.msrp * (Math.random() * (0.9 - 0.7) + 0.7)).toFixed(2);
  obj.days = days;
  obj.dates = createDates(days);
  trips.push(obj);
}

// insert trips into database
model.Trip.create(trips)
  .then(() => {
    console.log('seeded data');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
