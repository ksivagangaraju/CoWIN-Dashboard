// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  return (
    <div className="vaccination-age-bg-container">
      <h1 className="vaccination-age-heading">Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="count"
            data={vaccinationByAgeDetails}
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="60 Above" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            wrapperStyle={{fontSize: 13, paddingTop: 80}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
