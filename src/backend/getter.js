import FiveM from 'fivem-server-api'; // Import the Package.

const options = {
  timeout: 5000, // Default 5 seconds ( Convert To Milliseconds )
};

const server = new FiveM.Server('62.68.68.200', '30120', 'ERROR', options);

// How to use the function
server.getServerStatus().then(data => console.log(data)); // Get Server Status [ Online / Offline ]
server.getPlayersAll().then(data => console.log(data));      // Get Player Online Count

// Use More Than One Function
Promise.all([server.getServerStatus(), server.getPlayersAll()])
  .then(([serverStatus, players]) => {
    console.log(serverStatus);
    console.log(players);
  })
  .catch(error => {
    console.error(error);
  });
