import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const EventGenre=({ events })=> {

const [data, setData] = useState([]);

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AB8476'];

	useEffect(() => {setData(() => getData());}, [events]);

	const getData = () => {
		const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
		const data = genres.map((genre, index) => {
			const value = events.filter((event) =>
				event.summary.includes(genre)
			).length;
			return { genre, value };
		});
		// console.log(data);
		return data;
	};

	return (
		<ResponsiveContainer height={400}>
			<PieChart width={300} height={300}>
				<Pie
					data={data}
					cx='50%'
					cy='50%'
					labelLine={false}
					 outerRadius={125}
					fill='#D0ABA0'
					dataKey='value'
					label={({ genre, percent }) => {
						if (percent > 0) {
							return `${(percent * 100).toFixed(0)}% ${genre}`;
						}
					}}>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={colors[index]} />
					))}  
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}

export default EventGenre;


