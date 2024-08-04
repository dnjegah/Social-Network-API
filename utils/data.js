const names = [
    'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn',
    'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman',
    'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Smith',
    'Jones', 'Coollastname', 'enter_name_here', 'Ze', 'Zechariah', 'Zeek', 'Zeeshan', 'Zeid',
    'Zein', 'Zen', 'Zendel', 'Zenith', 'Zennon', 'Zeph', 'Zerah', 'Zhen', 'Zhi', 'Zhong',
    'Zhuo', 'Zi', 'Zidane', 'Zijie', 'Zinedine', 'Zion', 'Zishan', 'Ziya', 'Ziyaan', 'Zohaib',
    'Zohair', 'Zoubaeir', 'Zubair', 'Zubayr', 'Zuriel', 'Xander', 'Jared', 'Grace', 'Alex',
    'Mark', 'Tamar', 'Farish', 'Sarah', 'Nathaniel', 'Parker'
  ];
  
  const thoughtTexts = [
    'Here is a cool thought...', 'I love programming!', 'JavaScript is awesome!', 'MongoDB is great!',
    'Express makes life easier!', 'Node.js is powerful!', 'Mongoose is very useful!', 'Coding is fun!',
    'Always keep learning.', 'Debugging is just part of the process.', 'Share your knowledge.', 'Help others learn.',
  ];
  
  const emails = [
    'example.com', 'mail.com', 'test.com', 'demo.com'
  ];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  const getRandomEmail = (name) => `${name.split(' ').join('.').toLowerCase()}@${getRandomArrItem(emails)}`;
  
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtTexts),
        username: getRandomName().split(' ')[0],
        reactions: getRandomReactions(3),
      });
    }
    return results;
  };
  
  const getRandomReactions = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(thoughtTexts),
        username: getRandomName().split(' ')[0],
      });
    }
    return results;
  };
  
  module.exports = { getRandomName, getRandomEmail, getRandomThoughts };