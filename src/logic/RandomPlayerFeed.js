import RandomPlayer from './RandomPlayer';

// Player feeds should take in the add player action and should only need to be invoked once. 
export default function RandomPlayerFeed(action) {
    const addPlayer = (action) => {
        action(new RandomPlayer());
    };
    setInterval(addPlayer, 1000, action);
}