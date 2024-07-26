import { UseContextData } from '../context/Context';

const Day = () => {
	const { date, day, month } = UseContextData();
	return (
		<div className='flex justify-evenly bg-gradient-to-t from-purple-500 to-red-400 text-transparent bg-clip-text'>
			{month + day + ' ' + date}
		</div>
	);
};

export default Day;
