import { UseContextData } from '../context/Context';

const Day = () => {
	const { date, day, month } = UseContextData();
	return <div className='flex justify-evenly text-zinc-400'>{month + ', ' + day + 'day ' + date}</div>;
};

export default Day;
