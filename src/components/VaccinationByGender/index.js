// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props
  return (
    <div className="vaccination-gender-bg-container">
      <h1 className="vaccination-gender-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="count"
            startAngle={180}
            endAngle={0}
            data={vaccinationByGenderDetails}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" wrapperStyle={{fontSize: 13}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
