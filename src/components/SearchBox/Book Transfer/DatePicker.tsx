// src/components/SearchBox/Transfer/DatePicker/DatePickerDropdown.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DatePickerDropdownProps {
  pickupDate: Date | null;
  dropoffDate: Date | null;
  onSelectPickup: (date: Date) => void;
  onSelectDropoff: (date: Date | null) => void;
}

export default function DatePickerDropdown({
  pickupDate,
  dropoffDate,
  onSelectPickup,
  onSelectDropoff
}: DatePickerDropdownProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSelectingPickup, setIsSelectingPickup] = useState(!pickupDate);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
    if (isSelectingPickup) {
      onSelectPickup(date);
      setIsSelectingPickup(false);
    } else {
      if (pickupDate && date > pickupDate) {
        onSelectDropoff(date);
      } else {
        onSelectPickup(date);
        onSelectDropoff(null);
      }
    }
  };

  const isDateInRange = (date: Date) => {
    if (!pickupDate) return false;

    // Preview range saat hover
    if (!dropoffDate && hoverDate) {
      const start = pickupDate < hoverDate ? pickupDate : hoverDate;
      const end = pickupDate < hoverDate ? hoverDate : pickupDate;
      return date > start && date < end;
    }

    if (dropoffDate) {
      return date > pickupDate && date < dropoffDate;
    }

    return false;
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);

  return (
    <div className="search-dropdown search-dropdown--datepicker">
      <div className="datepicker-months">
        {/* Current Month */}
        <div className="datepicker-month">
          <div className="datepicker-nav">
            <button onClick={prevMonth} className="datepicker-nav-btn datepicker-nav-btn--left">
              <Image src="/img/svg/Arrow Left.svg" alt="Previous" width={20} height={20} />
            </button>
            <p className="xl xl--bold">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </p>
            <div style={{ width: 28 }} />
          </div>

          <div className="datepicker-weekdays">
            {daysOfWeek.map((day) => (
              <div key={day} className="datepicker-weekday xs xs--medium">
                {day}
              </div>
            ))}
          </div>

          <div className="datepicker-days">
            {getDaysInMonth(currentMonth).map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="datepicker-day datepicker-day--empty" />;
              }

              const isDisabled = isDateDisabled(date);
              const isInRange = isDateInRange(date);

              return (
                <button
                  key={index}
                  className={`datepicker-day 
                    ${pickupDate && date.toDateString() === pickupDate.toDateString() ? 'datepicker-day--selected-start' : ''}
                    ${dropoffDate && date.toDateString() === dropoffDate.toDateString() ? 'datepicker-day--selected-end' : ''}
                    ${isInRange ? 'datepicker-day--in-range' : ''} 
                    ${isDisabled ? 'datepicker-day--disabled' : ''}`
                  }
                  onMouseEnter={() => {
                    if (!isSelectingPickup && pickupDate && !dropoffDate) {
                      setHoverDate(date);
                    }
                  }}
                  onMouseLeave={() => setHoverDate(null)}
                  onClick={() => !isDisabled && handleDateClick(date)}
                  disabled={isDisabled}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next Month */}
        <div className="datepicker-month">
          <div className="datepicker-nav">
            <div style={{ width: 28 }} />
            <p className="xl xl--bold">
              {months[nextMonthDate.getMonth()]} {nextMonthDate.getFullYear()}
            </p>
            <button onClick={nextMonth} className="datepicker-nav-btn">
              <Image src="/img/svg/Arrow Right.svg" alt="Next" width={20} height={20} />
            </button>
          </div>

          <div className="datepicker-weekdays">
            {daysOfWeek.map((day) => (
              <div key={day} className="datepicker-weekday xs xs--medium">
                {day}
              </div>
            ))}
          </div>

          <div className="datepicker-days">
            {getDaysInMonth(nextMonthDate).map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="datepicker-day datepicker-day--empty" />;
              }

              const isDisabled = isDateDisabled(date);
              const isInRange = isDateInRange(date);

              return (
                <button
                  key={index}
                  className={`datepicker-day 
                    ${pickupDate && date.toDateString() === pickupDate.toDateString() ? 'datepicker-day--selected-start' : ''}
                    ${dropoffDate && date.toDateString() === dropoffDate.toDateString() ? 'datepicker-day--selected-end' : ''}
                    ${isInRange ? 'datepicker-day--in-range' : ''} 
                    ${isDisabled ? 'datepicker-day--disabled' : ''}`
                  }
                  onMouseEnter={() => {
                    if (!isSelectingPickup && pickupDate && !dropoffDate) {
                      setHoverDate(date);
                    }
                  }}
                  onMouseLeave={() => setHoverDate(null)}
                  onClick={() => !isDisabled && handleDateClick(date)}
                  disabled={isDisabled}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}