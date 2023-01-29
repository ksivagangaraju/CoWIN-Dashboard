// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    vaccinationDataApi: {},
  }

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const vaccinationCoverage = data.last_7_days_vaccination
      const vaccinationByGender = data.vaccination_by_gender
      const vaccinationByAge = data.vaccination_by_age
      this.setState({
        apiStatus: apiStatusConstants.success,
        vaccinationDataApi: {
          vaccinationCoverage,
          vaccinationByGender,
          vaccinationByAge,
        },
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {vaccinationDataApi} = this.state
    return (
      <>
        <VaccinationCoverage
          vaccinationCoverageDetails={vaccinationDataApi.vaccinationCoverage}
        />
        <VaccinationByGender
          vaccinationByGenderDetails={vaccinationDataApi.vaccinationByGender}
        />
        <VaccinationByAge
          vaccinationByAgeDetails={vaccinationDataApi.vaccinationByAge}
        />
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-heading">Something went wrong</h1>
    </div>
  )

  renderInProgressView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderCowinDashboard = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      case 'IN PROGRESS':
        return this.renderInProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-bg-container">
        <div className="cowin-container">
          <div className="cowin-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo"
            />
            <h1 className="logo-heading">Co-WIN</h1>
          </div>
          <h1 className="cowin-heading">CoWIN Vaccination in India</h1>
          {this.renderCowinDashboard()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
