import { configureStore } from '@reduxjs/toolkit';
import { appointmentsReducer,doctorDetailsReducer,doctorMonthlyEarningReducer, paymentDetailsReducer, dateSlotReducer, doctorsReducer,getAllPrescriptionReducer, drugDataReducer, editDataReducer, forgetPasswordReducer, patientAppointmentReducer, patientPrescriptionReducer, patientReportReducer, patientsReducer, prescriptionReducer, slotsReducer, testsReducer, toggleReducer, userReducer, patientDashboardReducer, getSearchDoctorReducer, getUserIdReducer, todayAppointmentsReducer, feeReducer } from './Reducers/User';
import dashboardReducer from './Reducers/dashboardReducer';
import callReducer from './Reducers/callReducer';
import { adminAPIReducer, adminDashboardReducer, adminDataDetailsReducer, adminDepartmentsReducer, adminDiseasesReducer, adminFaqsReducer, adminNewsReducer, adminPatientsReducer, enquiryReducer } from './Reducers/Admin';

const store = configureStore({
    reducer : {
      dashboard : dashboardReducer,
      call : callReducer,
      user : userReducer,
      feeApiStatus: feeReducer,
      patients : patientsReducer,
      drugs : drugDataReducer,
      tests : testsReducer,
      apiStatus : forgetPasswordReducer,
      prescriptions : prescriptionReducer,
      editData : editDataReducer,
      menuToggle : toggleReducer,
      slots : slotsReducer,
      dateSlots : dateSlotReducer,
      doctorAppointments : appointmentsReducer,
      todayDoctorAppointments : todayAppointmentsReducer,
      doctors : doctorsReducer,
      patientAppointments : patientAppointmentReducer,
      patientAllPrescription : patientPrescriptionReducer,
      patientReports : patientReportReducer,
      patientDashBoard : patientDashboardReducer,
      doctorDetails : doctorDetailsReducer,
      paymentDetails:paymentDetailsReducer,
      doctorMonthlyEarning: doctorMonthlyEarningReducer,
      allPrescriptions: getAllPrescriptionReducer,
      // admin 
      adminApiStatus : adminAPIReducer,
      adminPatients : adminPatientsReducer,
      dataDetails : adminDataDetailsReducer,
      diseases : adminDiseasesReducer,
      departments : adminDepartmentsReducer,
      faqs : adminFaqsReducer,
      newses : adminNewsReducer,
      enquiries : enquiryReducer,
      searchDoctors : getSearchDoctorReducer,
      userIdForPassword : getUserIdReducer,
      dashboardData : adminDashboardReducer
    }
})

export default store;