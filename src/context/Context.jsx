import { createContext, useContext, useEffect, useState } from 'react';
import '../components/analog.css';
export const Context = createContext(null);

export const UseContextData = () => {
	const context = useContext(Context);
	return context;
};

export const ContextProvider = (props) => {
	const [date, setDate] = useState('');
	const [hrs, setHrs] = useState('');
	const [min, setMin] = useState('');
	const [sec, setSec] = useState('');
	const [day, setDay] = useState('');
	const [amPm, setAmPm] = useState('');
	const [month, setMonth] = useState('');
	const [blink, setBlink] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [clock, setClock] = useState(false);
	const [loading, setLoading] = useState(true);
	const dayConvert = (numDay) => {
		switch (numDay) {
			case 1:
				setDay('Monday');
				break;
			case 2:
				setDay('Tuesday');
				break;
			case 3:
				setDay('Wednesday');
				break;
			case 4:
				setDay('Thursday');
				break;
			case 5:
				setDay('Friday');
				break;
			case 6:
				setDay('Saturday');
				break;
			default:
				setDay('Sunday');
				break;
		}
	};
	const monthConvert = {
		0: 'Jan, ',
		1: 'Feb, ',
		2: 'Mar, ',
		3: 'Apr, ',
		4: 'May, ',
		5: 'Jun, ',
		6: 'Jul, ',
		7: 'Aug, ',
		8: 'Sep, ',
		9: 'Oct, ',
		10: 'Nov, ',
		11: 'Dec, ',
	};
	const checkHrs = (hrsParam) => {
		if (hrsParam > 12) {
			setAmPm('PM');
			if (hrsParam - 12 < 10) {
				setHrs('0' + (hrsParam - 12));
			} else {
				setHrs(hrsParam - 12);
			}
		} else {
			setAmPm('AM');
			if (hrsParam < 10) {
				setHrs('0' + hrsParam);
			} else {
				setHrs(hrsParam);
			}
		}
	};
	const checkMinutes = (mins) => {
		if (mins < 10) {
			setMin('0' + mins);
		} else {
			setMin(mins);
		}
	};
	const checkSec = (seconds) => {
		if (seconds < 10) {
			setSec('0' + seconds);
		} else {
			setSec(seconds);
		}
	};
	const time = () => {
		const date = new Date();
		setDate(date.getDate());
		checkHrs(date.getHours());
		checkMinutes(date.getMinutes());
		checkSec(date.getSeconds());
		dayConvert(date.getDay());
		setMonth(monthConvert[date.getMonth()]);
	};
	const clickToggle = () => {
		setToggle((prev) => !prev);
	};
	const changeClock = () => {
		setClock((prev) => !prev);
	};
	setTimeout(() => {
		setLoading(false);
	}, 1000);
	setInterval(() => {
		time();
	}, 1000);
	useEffect(() => {
		setBlink((prev) => !prev);
	}, [sec]);
	return (
		<Context.Provider
			value={{ date, hrs, min, sec, amPm, day, month, blink, clickToggle, changeClock, clock, toggle, loading }}
		>
			{props.children}
		</Context.Provider>
	);
};
