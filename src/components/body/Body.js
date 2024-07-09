import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Body = () => {
    const [data, setData] = useState([]);
    const [randomItem, setRandomItem] = useState(null); // State to hold random item

    // Function to get a random item from the data array
    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    };

    useEffect(() => {
        // Fetch data from items.json when component mounts
        fetch('/items.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                // Set initial random item if data is available
                if (data.length > 0) {
                    setRandomItem(getRandomItem());
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Update randomItem whenever data changes
    useEffect(() => {
        if (data.length > 0) {
            setRandomItem(getRandomItem());
        }
    }, [data]);

    return (
        <div className="body">
            <div className="new">
                <h2>Updates</h2>
                <h3 className='all'>Whole List:</h3>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <img src={item.picture} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Chapter: {item.chapter}</p>
                                <p><i className="bi bi-alarm"></i> {item.time} minutes ago</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className='dayChapter'>
                <ul className='nocturn'>
                    <h1>Today's Chapter</h1>
                    {randomItem && (
                        <li key={randomItem.id}>
                            <img src={randomItem.picture} alt={randomItem.name} />
                            <div>
                                <h3>{randomItem.name}</h3>
                                <p>Chapter: {randomItem.chapter}</p>
                                <p><i className="bi bi-alarm"></i> {randomItem.time} minutes ago</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>

            <div className='space'>

            </div>

            <div className="new">
                <h2>Hot</h2>
                <h3 className='all'>Whole List:</h3>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <img src={item.picture} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Chapter: {item.chapter}</p>
                                <p><i className="bi bi-alarm"></i> {item.time} minutes ago</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="new">
                <h2>Popular</h2>
                <h3 className='all'>Whole List:</h3>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <img src={item.picture} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Chapter: {item.chapter}</p>
                                <p><i className="bi bi-alarm"></i> {item.time} minutes ago</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="new">
                <h2>Recent</h2>
                <h3 className='all'>Whole List:</h3>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <img src={item.picture} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Chapter: {item.chapter}</p>
                                <p><i className="bi bi-alarm"></i> {item.time} minutes ago</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="updated">
                <h2>Recent</h2>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <img src={item.picture} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Chapter: {item.chapter}</p>
                                <p><i className="bi bi-alarm"></i> {item.time} minutes ago</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default Body;
