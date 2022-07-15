import React from 'react';
import {NavLink} from 'react-router-dom'
function Header() {
    const links = [
        {
          url: '/',
          text: 'Главная'
        },
        {
            url: '/tasks',
            text: 'Задачи'
        },
        {
            url: '/about',
            text: 'О нас'
        },
    ]
    return (
        <header className="w-full py-2 flex items-center justify-between">
            <div className="text-5xl">
                Logo
            </div>
            <ul className="flex items-center">
                {links.map(link => <li key={link.url} className="mr-7 last:mr-0">
                    <NavLink className={({isActive}: {isActive: boolean}) => isActive? 'text-blue-500': undefined}
                             to={link.url}>
                        {link.text}
                    </NavLink>
                </li>)}
            </ul>
        </header>
    );
}

export default Header;