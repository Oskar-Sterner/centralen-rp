import { useEffect, useState } from 'react';
import axios from 'axios';
import '../scss/main.scss';

function ServerPanel() {
  const [responseData, setResponseData] = useState<any>(null);
  const [showPlayers, setShowPlayers] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://servers-frontend.fivem.net/api/servers/single/dpv4b3'
        );
        setResponseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    setShowPlayers(!showPlayers);
  };

  const handlePlayerClick = (player: any) => {
    setSelectedPlayer(player);
    setShowPlayers(false)
    setShowModal(true);
  };

  const removeColorCodes = (str: string) => {
    return str.replace(/\^./g, '');
  };

  const formattedHostname = responseData?.Data?.hostname
    ? removeColorCodes(responseData.Data.hostname)
    : '';

  return (
    <>
      <div id="top-line-server-panel"/>
      <div id="ServerPanel">
        <div className="host-name">
          <p>{formattedHostname}</p>
        </div>
        <div className="connect-button">
          <a href="https://cfx.re/join/dpv4b3">
            <i className="fa-solid fa-right-to-bracket"></i> Anslut
          </a>
        </div>
        <div className="player-count">
          <p>Spelare: &nbsp;</p>
          <p className="player-count-live">
            {responseData?.Data?.clients} / {responseData?.Data?.sv_maxclients}
          </p>
        </div>
        <div className="player-info">
          <button onClick={handleButtonClick}>
            {showPlayers ? (
              <>
                <i className="fa-solid fa-eye-slash"></i> Göm spelare
              </>
            ) : (
              <>
                <i className="fa-solid fa-eye"></i> Visa spelare
              </>
            )}
          </button>
        </div>
        <div className="players">
          {showPlayers &&
            responseData?.Data?.players.map((player: any) => (
              <a
                key={player.id}
                href="#"
                onClick={() => handlePlayerClick(player)}
                id={player.id}
              >
                {player.name}
              </a>
            ))}
        </div>
      </div>
      {showModal && selectedPlayer && (
        <div className="modal">
          <div className="modal-content">
            <h2>Player Details</h2>
            <p><span>Player Name:</span> {selectedPlayer.name}</p>
            <p><span>Ping:</span> {selectedPlayer.ping}</p>
            {selectedPlayer.identifiers.map((identifier: string) => {
              if (identifier.startsWith('steam:')) {
                return <p key={identifier.substring(6)}><span>Steam:</span> {identifier.substring(6)}</p>;
              }
              return null;
            })}
            {selectedPlayer.identifiers.map((identifier: string) => {
              if (identifier.startsWith('discord:')) {
                return <p key={identifier.substring(8)}><span>Discord:</span> {identifier.substring(8)}</p>;
              }
              return null;
            })}
            {selectedPlayer.identifiers.map((identifier: string) => {
              if (identifier.startsWith('fivem:')) {
                return <p key={identifier.substring(6)}><span>Fivem:</span> {identifier.substring(6)}</p>;
              }
              return null;
            })}
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ServerPanel;
