const db = require('../db')
const { Ride } = require('../models/Ride')

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
      name: 'Skull Island: Reign of Kong',
      description:
        'Brave the dangers of a mysterious island where few have dared to venture. On your treacherous jungle expedition, prehistoric predators and vile creatures attack from all sides. Just as all seems lost, the most colossal ape ever to walk the Earth hurls himself between you and certain doom. Is he your hero or the ultimate foe?',
      images:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.iomgeek.com%2Fwp-content%2Fuploads%2F2016%2F08%2FThe-Incredible-Hulk-Coaster_8.jpg&f=1&nofb=1&ipt=91499b639ead8138226b2f999eae6b3860a74c0ce844d2622e117c1ff866410f&ipo=images',
      ticket_sales: 20
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
