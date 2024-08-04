const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomEmail, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const thoughts = getRandomThoughts(10);
  const createdThoughts = await Thought.insertMany(thoughts);

  const users = [];

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = getRandomEmail(username);

    users.push({
      username,
      email,
      thoughts: createdThoughts.slice(0, 5).map(thought => thought._id),
      friends: []
    });
  }

  await User.insertMany(users);

  // Update users with random friends
  const allUsers = await User.find();
  for (let user of allUsers) {
    user.friends = allUsers
      .filter(u => u._id.toString() !== user._id.toString())
      .slice(0, Math.floor(Math.random() * allUsers.length))
      .map(u => u._id);
    await user.save();
  }

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});