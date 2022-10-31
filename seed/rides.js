const db = require('../db')
const { Ride } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rides = [
    {
      name: 'Skull Island: Reign of Kong',
      description:
        'Description: Brave the dangers of a mysterious island where few have dared to venture. On your treacherous jungle expedition, prehistoric predators and vile creatures attack from all sides. Just as all seems lost, the most colossal ape ever to walk the Earth hurls himself between you and certain doom. Is he your hero or the ultimate foe?',
      images: 'https://i.imgur.com/vrFsuS6.png',
      ticket_sales: 20
    },
    {
      name: 'The Incredible Hulk Coaster',
      description:
        ' You’ve volunteered to take part in a science experiment based on Dr. Bruce Banner’s research—but a blast of gamma radiation changes everything. You launch up to 67 miles per hour as Hulk-like power propels you upside down into a zero-gravity roll, racing faster and faster. Hang on as this high-speed, red-line rampage smashes its way through the sky.',
      images:
        'https://www.insidethemagic.net/wp-content/uploads/2015/05/vehicle-550x336.png',
      ticket_sales: 30
    },
    {
      name: 'X²',
      description:
        'Get ready to enter an all-new realm on X2, a trail-blazing fifth dimension roller coaster. With its 360-degree rotating seats and head-first, face down drops, X has been one of the most popular thrill rides on the planet. On ordinary roller coasters, the train stays in line with the track… but there is nothing ordinary about X2. Go ahead and take in the view on the long ride up, 200 feet in the air.  Enjoy the groundbreaking use of music, sound effects, and fire that have been carefully designed to heighten your total sensory overload. X2’s utterly innovative design will keep your mind in full thrust the entire time.',
      images:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffarm3.staticflickr.com%2F2686%2F4472101181_e69b7c1f2f_o.jpg&f=1&nofb=1&ipt=dd9fe5ebddaf79439364a0525d97bf5e81164bb11689ddfcba566d3ad803b987&ipo=images',
      ticket_sales: 10
    },
    {
      name: 'Skull Island: Reign of Kong',
      description:
        'Description: Brave the dangers of a mysterious island where few have dared to venture. On your treacherous jungle expedition, prehistoric predators and vile creatures attack from all sides. Just as all seems lost, the most colossal ape ever to walk the Earth hurls himself between you and certain doom. Is he your hero or the ultimate foe?',
      images: 'https://i.imgur.com/vrFsuS6.png',
      ticket_sales: 20
    }
  ]

  await Ride.insertMany(rides)
  console.log('Created some rides!')
}
const run = async () => {
  await main()
  db.close()
}

run()
