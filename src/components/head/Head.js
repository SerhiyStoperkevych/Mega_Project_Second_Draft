import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Head = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [none, setNone] = useState(true);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const toggleNone = () => {
        setNone(!none);
    };

    return (
        <>
            <div className='head' style={{color: none ? '#eeeeee' : '#000000', backgroundColor: none ? '#3498db' : '#cb6724' }}>
                <div className='logo'>
                    <img src='https://static.vecteezy.com/system/resources/previews/026/618/994/original/free-text-of-sticker-logo-sign-for-promotion-design-label-icon-free-vector.jpg' alt='free-logo' />
                    <h1>SomeSome</h1>
                </div>

                <div className='menu'>
                    <h2 className='some'>Catalog</h2>
                    <h2 className='some'>Genres</h2>
                    <h2 className='some'>Preferences</h2>
                    <h2 className='some'>Top 100</h2>
                    <i className="bi bi-alarm"></i>
                </div>

                <div className='icons'>
                    <i className="bi bi-brightness-high" onClick={toggleNone}></i>
                    <i className="bi bi-bell"></i>
                    <i className="bi bi-bookmark"></i>
                </div>

                <div className='input'>
                    <input
                        type='text'
                        placeholder={isFocused ? '' : '🔍   Search'}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <i className="bi bi-people-fill"></i>
                </div>
            </div>
        </>
    );
};

export default Head;
