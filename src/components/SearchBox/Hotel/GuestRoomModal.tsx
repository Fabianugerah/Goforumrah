// src/components/SearchBox/GuestRoomDropdown.tsx
'use client';

import Image from 'next/image';

interface GuestRoomDropdownProps {
    adults: number;
    children: number;
    rooms: number;
    onUpdateAdults: (value: number) => void;
    onUpdateChildren: (value: number) => void;
    onUpdateRooms: (value: number) => void;
}

export default function GuestRoomDropdown({
    adults,
    children,
    rooms,
    onUpdateAdults,
    onUpdateChildren,
    onUpdateRooms
}: GuestRoomDropdownProps) {
    const increment = (setter: (value: number) => void, value: number) => {
        setter(value + 1);
    };

    const decrement = (setter: (value: number) => void, value: number, min: number = 0) => {
        if (value > min) {
            setter(value - 1);
        }
    };

    return (
        <div className="search-dropdown search-dropdown--guest">
            <div className="search-dropdown-header">
                <p className="xl xl--bold">Passenger</p>
            </div>

            <div className="guest-counter-list">
                {/* Adults */}
                <div className="guest-counter-item">
                    <div className="guest-counter-info">
                        <p className="lg lg--medium">Adult</p>
                    </div>
                    <div className="guest-counter-controls">
                        <button
                            className={`counter-btn ${adults <= 0 ? 'counter-btn--disabled' : ''}`}
                            onClick={() => decrement(onUpdateAdults, adults, 0)}
                            disabled={adults <= 0}
                        >
                            <Image src="/img/svg/Minus.svg" alt="Minus" width={20} height={20} />
                        </button>
                        <span className="counter-value lg lg--medium">{adults}</span>
                        <button
                            className="counter-btn"
                            onClick={() => increment(onUpdateAdults, adults)}
                        >
                            <Image src="/img/svg/Plus.svg" alt="Plus" width={20} height={20} />
                        </button>
                    </div>
                </div>

                {/* Children */}
                <div className="guest-counter-item">
                    <div className="guest-counter-info">
                        <p className="lg lg--medium">Children</p>
                    </div>
                    <div className="guest-counter-controls">
                        <button
                            className={`counter-btn ${children <= 0 ? 'counter-btn--disabled' : ''}`}
                            onClick={() => decrement(onUpdateChildren, children)}
                            disabled={children <= 0}
                        >
                            <Image src="/img/svg/Minus.svg" alt="Minus" width={20} height={20} />
                        </button>
                        <span className="counter-value lg lg--medium">{children}</span>
                        <button
                            className="counter-btn"
                            onClick={() => increment(onUpdateChildren, children)}
                        >
                            <Image src="/img/svg/Plus.svg" alt="Plus" width={20} height={20} />
                        </button>
                    </div>
                </div>

                {/* Rooms */}
                <div className="guest-counter-item">
                    <div className="guest-counter-info">
                        <p className="lg lg--medium">Rooms</p>
                    </div>
                    <div className="guest-counter-controls">
                        <button
                            className={`counter-btn ${rooms <= 0 ? 'counter-btn--disabled' : ''}`}
                            onClick={() => decrement(onUpdateRooms, rooms, 0)}
                            disabled={rooms <= 0}
                        >
                            <Image src="/img/svg/Minus.svg" alt="Minus" width={20} height={20} />
                        </button>
                        <span className="counter-value lg lg--medium">{rooms}</span>
                        <button
                            className="counter-btn"
                            onClick={() => increment(onUpdateRooms, rooms)}
                        >
                            <Image src="/img/svg/Plus.svg" alt="Plus" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}