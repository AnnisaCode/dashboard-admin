import React, { useState } from 'react';
import { Nav, FormControl } from 'react-bootstrap';

const Sidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const menuItems = [
        { name: 'Dashboard', link: '#dashboard', icon: 'fas fa-tachometer-alt' },
        { name: 'Reports', link: '#reports', icon: 'fas fa-chart-line' },
        { name: 'Settings', link: '#settings', icon: 'fas fa-cog' },
    ];

    const filteredMenuItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Menu</div>
            <FormControl
                type="text"
                placeholder="Search"
                className="mb-3"
                value={searchTerm}
                onChange={handleSearch}
            />
            <Nav className="flex-column">
                {filteredMenuItems.map((item, index) => (
                    <Nav.Link href={item.link} key={index}>
                        <i className={item.icon}></i> {item.name}
                    </Nav.Link>
                ))}
            </Nav>
        </div>
    );
};

export default Sidebar;
