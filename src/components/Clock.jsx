import Day from './Day';
import Time from './Time';
const Clock = () => {
	return (
		<div className='h-[50%] w-[90%] bg-gray-700 flex justify-center items-center rounded-md shadow-inner shadow-green-800'>
			<div className='shadow-2xl shadow-indigo-500 rounded-md'>
				<Time />
				<Day />
			</div>
		</div>
	);
};

export default Clock;
