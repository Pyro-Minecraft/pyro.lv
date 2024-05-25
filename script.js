document.addEventListener('DOMContentLoaded', function() {
    const serverIP = 'mc.pyro.lv';
    const apiURL = `https://api.mcsrvstat.us/2/${serverIP}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const statusElement = document.getElementById('status');
            const playerCountElement = document.getElementById('player-count');

            if (data.online) {
                statusElement.textContent = 'Serveris ir Online';
                playerCountElement.textContent = `Players online: ${data.players.online}`;
            } else {
                statusElement.textContent = 'Serveris ir Offline';
                playerCountElement.textContent = '';
            }
        })
        .catch(error => {
            console.error('Error fetching server status:', error);
            document.getElementById('status').textContent = 'Error fetching server status';
        });
});
