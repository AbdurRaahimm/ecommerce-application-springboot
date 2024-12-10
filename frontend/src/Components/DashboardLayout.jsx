import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const menus = [
    {
        id: 1,
        href: '',
        name: 'Add Company'
    },
    {
        id: 2,
        href: 'product',
        name: 'Add Product'
    }
]

export default function DashboardLayout() {
    return (
        <>
            <nav>
                <ul className="px-5 py-5 flex space-x-3">
                    {
                        menus.map(menu => {
                            return (
                                <li key={menu.id}>
                                    <NavLink
                                        to={menu.href}
                                        className={({ isActive }) =>
                                            `ml-3 px-3 py-2 rounded-md text-sm font-medium capitalize ${isActive
                                                ? 'bg-blue-700 text-white'
                                                : 'text-blue-600 bg-[#5143d91a] hover:bg-blue-700 hover:text-white'
                                            }`
                                        }
                                    >
                                        {menu.name}
                                    </NavLink>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>

            <Outlet />
        </>
    )
}
