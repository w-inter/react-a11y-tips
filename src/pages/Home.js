import React from 'react'

import QuizForm from '../components/QuizForm'
import QuizTable from '../components/QuizTable'

export default function Home() {
	const [entries, setEntries] = React.useState([])

	return (
		<div className="lg:max-w-screen-lg mx-auto mt-8 md:mt-16 text-gray-800">
			<div className="lg:grid lg:grid-cols-2">
				<h2 className="text-2xl md:text-3xl lg:col-span-2 font-serif mb-8">Encuesta</h2>
				<QuizForm
					onSubmit={(entry) => {
						setEntries((entries) => [...entries, entry])
					}}
				/>
			</div>
			<div>
				<h3 className="text-2xl md:text-3xl mt-8 lg:mt-16 font-serif mb-8">Resultados</h3>
				{entries.length > 0 ? (
					<QuizTable
						entries={entries}
						onRemove={(index) => setEntries((entries) => entries.filter((entry, i) => i !== index))}
					/>
				) : (
					<p className="mt-4 text-md text-gray-600">Complete la encuesta para mostrar resultados</p>
				)}
			</div>
		</div>
	)
}
