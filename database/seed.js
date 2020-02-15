const mongoose = require('mongoose');
const db = require('./');
const model = require('./model.js');
const faker = require('faker');
var fs = require('fs');

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

const codeOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const trips = [];

// creates an array of departure dates with random length of days in between > length of the trip
const createDates = (tripLength) => {
  const dates = [];
  const firstDate = Math.floor(Math.random() * (12 - 1)) + 1;
  let incrementer = 0;

  for (let i = 0; i < 22; i++) {
    let date = new Date(2020, 0, firstDate + incrementer);
    dates.push(date);
    incrementer += Math.floor(Math.random() * (15 - tripLength + 1)) + tripLength + 1;
  }
  return dates;
};

// create a stream, name the file and write the headers for the CSV file. Include the encoding ‘utf-8’.
const writeUsers = fs.createWriteStream('users.csv');
writeUsers.write('id,code,title,city,msrp,price,discounted,days,dates,rating,reviews\n', 'utf8');
const start = Date.now();

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let code = '';
      code += `${codeOptions[Math.floor(Math.random() * 26)]}${codeOptions[Math.floor(Math.random() * 26)]}${codeOptions[Math.floor(Math.random() * 26)]}${codeOptions[Math.floor(Math.random() * 26)]}`;
      let title = '';
      const city = `${faker.address.city()}|${faker.address.country()}`;
      title += `${adjectives[Math.floor(Math.random() * 14)]} ${
        nouns[Math.floor(Math.random() * 9)]} ${
        prepositions[Math.floor(Math.random() * 2)]} ${city.split('|')[0]}`;
      const msrp = (Math.random() * (2500 - 1500) + 1500).toFixed(2);
      const price = (msrp * (Math.floor((Math.random() * (1.1 - 0.6) + 0.6) * 10) / 10).toFixed(1)).toFixed(2);
      const discounted = msrp !== price;
      const days = Math.floor(Math.random() * (15 - 5)) + 5;
      const datesArr = createDates(days);
      // separate each date with '|'
      const dates = datesArr.join('|');
      const rating = (Math.random() * (5.01 - 3.5) + 3.5).toFixed(2);
      const reviews = Math.floor(Math.random() * 400);
      const data = `${id},${code},${title},${city},${msrp},${price},${discounted},${days},${dates},${rating},${reviews}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
    // had to stop early!
    // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}
// Then invoke the function with a callback telling the write to end.
writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
  console.log('end:', (Date.now() - start) / 60000);
});

/* What this does is pause the write process when the buffer is full and once the drain event if fired, 
it continues until all the records have been written. */
